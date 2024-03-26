import { connect, Schema, model } from "mongoose";

if (!process.env.MONGO_URI) {
  console.log("MONGO_URI is not defined");
  process.exit(1);
}

connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Successfully connected to mongodb");
  })
  .catch(() => {
    console.log("Failed to connect to mongodb");
  });

const newSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: false,
  },
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  address2: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  state: {
    type: String,
    required: false,
  },
  zipCode: {
    type: String,
    required: false,
  },
  freightOriginAddress: {
    type: String,
    required: false,
  },
  freightOriginAddress2: {
    type: String,
    required: false,
  },
  freightOriginCity: {
    type: String,
    required: false,
  },
  freightOriginState: {
    type: String,
    required: false,
  },
  freightOriginZipCode: {
    type: String,
    required: false,
  },
  token: {
    type: String,
    required: false,
  },
  resetPasswordToken: {
    type: String,
    required: false,
  },
  resetPasswordExpires: {
    type: Date,
    required: false,
  },
});

const collection = model("collection", newSchema);

export default collection;
