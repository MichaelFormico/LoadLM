// Asaduzzaman Pavel
// www.iampavel.dev
// https://wa.me/+8801755655440

console.log("Starting server...");

import dotenv from "dotenv";
dotenv.config();

import express, { json, urlencoded } from "express";
import collection from "./mongo.mjs";
import cors from "cors";
import crypto from "crypto";
import * as bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import { validateToken } from "./middleware/jwt.mjs";
import * as utils from "./utils.mjs";

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(
  cors({
    preflightContinue: true,
    credentials: true,
  }),
);

const JWT_SECRET = process.env.JWT_SECRET;

console.log("JWT Secret Key:", JWT_SECRET);

// Endpoint to retrieve user data by email
app.get("/get-user-data", validateToken, async (req, res) => {
  console.log("Received email:", req.user); // Log the email received

  console.log("auth user is", req.user);
  try {
    const user = await collection.findOne({ email: req.user.email });

    if (user) {
      res.json(user); // Send user data if found
    } else {
      res.json("notexist"); // Send a message if user does not exist
    }
  } catch (error) {
    console.error("Error:", error);
    res.json("fail"); // Send a message if an error occurs
  }
});

app.get("/", cors(), (req, res) => {
  res.json({ message: "Welcome to the API" });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await collection.findOne({ email: email });
    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    if (bcrypt.compareSync(password, user.password) === false) {
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }

    const token = jsonwebtoken.sign(
      {
        data: {
          email: user.email,
          company: user.company,
          firstName: user.firstName,
          lastName: user.lastName,
          phone: user.phone,
          address: user.address,
          address2: user.address2,
          city: user.city,
          state: user.state,
          zipCode: user.zipCode,
          freightOriginAddress: user.freightOriginAddress,
          freightOriginAddress2: user.freightOriginAddress2,
          freightOriginCity: user.freightOriginCity,
          freightOriginState: user.freightOriginState,
          freightOriginZipCode: user.freightOriginZipCode,
        },
      },
      JWT_SECRET,
      { expiresIn: "24h" },
    );

    user.token = token;
    await user.save();

    res
      .cookie("token", token, {
        expire: Date.now() + 24 * 60 * 60 * 1000,
      })
      .json({ token: token });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" }); // Internal server error if an error occurs
  }
});

app.post("/reset-password", async (req, res) => {
  // send email to user with the link to reset password
  const { email } = req.body;
  const user = await collection.findOne({ email: email });
  if (!user) {
    res.status(404).json({ error: "User not found" });
    return;
  }

  user.resetPasswordToken = crypto.randomBytes(20).toString("hex");
  user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
  await user.save();

  const link = `${process.env.FRONTEND_URL}/reset/${user.resetPasswordToken}`;
  let text = `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n`;
  text += `Please click on the following link, or paste this into your browser to complete the process:\n\n ${link}\n\n If you did not request this, please ignore this email and your password will remain unchanged.\n`;

  try {
    await utils.sendEmail(email, "Password Reset", text);
    res.json({ message: "Password reset link sent successfully" });
    return;
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
    return;
  }
});

// Endpoint to verify the password reset token
app.get("/change-password/:token", async (req, res) => {
  const user = await collection.findOne({
    resetPasswordToken: req.params.token,
    resetPasswordExpires: { $gt: Date.now() },
  });

  if (!user) {
    res
      .status(400)
      .json({ error: "Password reset token is invalid or has expired" });
    return;
  }

  res.status(200).json({ message: "Password reset link is valid" });
});

// Endpoint to reset the password using the token received
app.post("/reset/:token", async (req, res) => {
  const { password, confirmpassword } = req.body;

  const user = await collection.findOne({
    resetPasswordToken: req.params.token,
    resetPasswordExpires: { $gt: Date.now() },
  });

  if (!user) {
    res
      .status(400)
      .json({ error: "Password reset token is invalid or has expired" });
    return;
  }

  if (password !== confirmpassword) {
    res.status(400).json({ error: "Passwords do not match" });
    return;
  }

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  user.password = hash;
  user.resetPasswordToken = null;
  user.resetPasswordExpires = null;
  await user.save();

  res.status(200).json({ message: "Password reset successful" });
});

app.post("/logout", validateToken, async (req, res) => {
  try {
    const user = await collection.findOne({ email: req.user.email });
    if (!user) {
      res.json("notexist"); // Send a message if user does not exist
      return;
    }

    user.token = null;
    await user.save();

    res.json({ message: "Successfully logged out" });
  } catch (error) {
    console.error("Error:", error);
    res.json("fail"); // Send a message if an error occurs
  }
});

app.post("/signup", async (req, res) => {
  const {
    email,
    password,
    company,
    firstName,
    lastName,
    phone,
    address,
    address2,
    city,
    state,
    zipCode,
    freightOriginAddress,
    freightOriginAddress2,
    freightOriginCity,
    freightOriginState,
    freightOriginZipCode,
  } = req.body;

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  const data = {
    email: email,
    password: hash,
    company: company,
    firstName: firstName,
    lastName: lastName,
    phone: phone,
    address: address,
    address2: address2,
    city: city,
    state: state,
    zipCode: zipCode,
    freightOriginAddress: freightOriginAddress,
    freightOriginAddress2: freightOriginAddress2,
    freightOriginCity: freightOriginCity,
    freightOriginState: freightOriginState,
    freightOriginZipCode: freightOriginZipCode,
  };

  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      res.status(400).json({ error: "User already exists" });
      return;
    }

    await collection.insertMany([data]);
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/user/update", validateToken, async (req, res) => {
  const {
    email,
    company,
    firstName,
    lastName,
    phone,
    address,
    address2,
    city,
    state,
    zipCode,
    freightOriginAddress,
    freightOriginAddress2,
    freightOriginCity,
    freightOriginState,
    freightOriginZipCode,
  } = req.body;

  const user = req.user;

  user.email = email || user.email;
  user.company = company || user.company;
  user.firstName = firstName || user.firstName;
  user.lastName = lastName || user.lastName;
  user.phone = phone || user.phone;
  user.address = address || user.address;
  user.address2 = address2 || user.address2;
  user.city = city || user.city;
  user.state = state || user.state;
  user.zipCode = zipCode || user.zipCode;
  user.freightOriginAddress = freightOriginAddress || user.freightOriginAddress;
  user.freightOriginAddress2 =
    freightOriginAddress2 || user.freightOriginAddress2;
  user.freightOriginCity = freightOriginCity || user.freightOriginCity;
  user.freightOriginState = freightOriginState || user.freightOriginState;
  user.freightOriginZipCode = freightOriginZipCode || user.freightOriginZipCode;

  try {
    await user.save();
    res.json({ message: "User updated successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(process.env.NODE_PORT, () => {
  console.log("Serving on port " + process.env.NODE_PORT);
});
