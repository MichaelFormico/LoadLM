const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const crypto = require("crypto"); // Import the crypto module
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const middlewares = require("./middleware");

// Asaduzzaman Pavel
// www.iampavel.dev
// https://wa.me/+8801755655440
// https://wise.com

require("dotenv").config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    preflightContinue: true,
    credentials: true,
}));

const JWT_SECRET = process.env.JWT_SECRET;

console.log("JWT Secret Key:", JWT_SECRET);

// Endpoint to retrieve user data by email
// Endpoint to retrieve user data by email
app.post("/get-user-data", middlewares.jwt.validateToken, async (req, res) => {
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

app.get("/", cors(), (req, res) => {});

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

    const token = jwt.sign(
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
      { expiresIn: "24h" }
    );

    user.token = token;
    await user.save();
    // await collection.updateOne({ _id: user._id }, { token: token });

    res.cookie('token', token, {
        expire: Date.now() + 24 * 60 * 60 * 1000
    }).json({ token: token });

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" }); // Internal server error if an error occurs
  }
});

app.post("/logout", middlewares.jwt.validateToken, async (req, res) => {
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

  console.log("body", req.body);

  console.log("password", password);
  const salt = bcrypt.genSaltSync(10);
  console.log(salt);
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
      res.status(400).json({ error: "User already exists" }); // Bad request if user already exists
    } else {
      await collection.insertMany([data]);
      res.status(201).json({ message: "User created successfully" }); // Created status if user is successfully created
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" }); // Internal server error if an error occurs
  }
});

app.listen(8000, () => {
  console.log("Port connected");
});
