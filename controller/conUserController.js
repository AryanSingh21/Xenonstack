const conUserModel = require("../model/conUserModel");

exports.allContacts = async (req, res) => {
  try {
    const contacts = await conUserModel.find({});
    return res.status(200).send({
      success: true,
      message: "These are all the contacts",
      count: contacts.length,
      contacts,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error while finding all the contacts",
      error,
    });
  }
};

exports.postQuery = async (req, res) => {
  try {
    const { name, email, number, message } = req.body;

    if (!name || !email || !number || !message) {
      return res.status(400).send({
        success: false,
        message: "Please fill all the details",
      });
    }
    const contact = new conUserModel({ name, email, number, message });
    await contact.save();
    return res.status(201).send({
      success: true,
      message: "new contact added",
      contact,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error while saving the Query",
    });
  }
};
