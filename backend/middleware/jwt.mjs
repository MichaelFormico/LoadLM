import jsonwebtoken from "jsonwebtoken";
import collection from "../mongo.mjs";

export async function validateToken(req, res, next) {
  console.log(req.cookies);

  const authenticationHeader = req.headers["authentication"];
  if (!authenticationHeader) {
    res.status(401).json({ error: "Authentication Required" });
    return;
  }

  console.log(authenticationHeader.split(" "));
  if (authenticationHeader.split(" ").length != 2) {
    res.status(401).json({ error: "Invalid authentication header" });
    return;
  }

  const token = authenticationHeader.split(" ")[1]; // Bearer TOKENGOESHERE

  jsonwebtoken.verify(token, process.env.JWT_SECRET, async (err, data) => {
    if (err) {
      res.status(401).json({ error: "Token is not valid or expired" });
      return;
    }

    try {
      const user = await collection.findOne({ token: token });
      req.user = user;
      next();
    } catch (error) {
      res.status(401).json({ error: "Token is not associated to any user" });
      return;
    }
  });
}
