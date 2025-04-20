const express = require("express");
const Router = express.Router();

const {
  createcontact,
  getallcontacts,
  updatecontact,
  deletecontact
} = require("../Controllers/contactController");

Router.post("/", createcontact);
Router.get("/", getallcontacts);
Router.put("/:id", updatecontact);
Router.delete("/:id", deletecontact);
///admin view

module.exports = Router;
