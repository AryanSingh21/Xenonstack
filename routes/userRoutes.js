const express = require("express");
const {
  getAllUsers,
  registerUser,
  loginUser,
} = require("../controller/userController");
const router = express.Router();

//routes

//all users
router.get("/all-users", getAllUsers);

//create user
router.post("/register", registerUser);

//login user
router.post("/login", loginUser);

module.exports = router;
