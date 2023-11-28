const userModel = require("../model/userModel");

//get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({});

    return res.status(200).send({
      success: true,
      message: "These are all the users",
      count: users.length,
      users,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error while finding all the users",
      error,
    });
  }
};

//register user
exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).send({
        success: false,
        message: "Please fill all the details",
      });
    }

    //existing user
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).send({
        success: false,
        message: "Existing user",
      });
    }

    //add new user if no errors
    const user = new userModel({ username, email, password });
    await user.save();
    return res.status(201).send({
      success: true,
      message: "new user added",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error in Registeration",
    });
  }
};

//login user

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Please fill all the fields",
      });
    }
    // username does not exist
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(401).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    //password check

    if (password !== user.password) {
      return res.status(401).send({
        success: false,
        message: "Invalid email or password",
      });
    }

    return res.status(200).send({
      success: true,
      message: "User successfully logged in",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error while logging the user",
    });
  }
};
