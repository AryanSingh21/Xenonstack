const mongoose = require("mongoose");

const conUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  number: {
    type: Number,
    required: [true, "number is required"],
  },
  message: {
    type: String,
    required: [false, "Please consider writing"],
  },
});

const conUserModel = mongoose.model("Contact", conUserSchema);

module.exports = conUserModel;
