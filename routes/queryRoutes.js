const express = require("express");
const { allContacts, postQuery } = require("../controller/conUserController");

const router = express.Router();
//all queries
router.get("/all-queries", allContacts);

//post query
router.post("/post-query", postQuery);

module.exports = router;
