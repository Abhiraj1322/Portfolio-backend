const express = require("express");
const Router = express.Router();
const { createTestimonial, getAllTestimonials, updateTestimonial, deleteTestimonial } = require("../Controllers/TestimonialController");

Router.post("/", createTestimonial);
Router.get("/", getAllTestimonials);
Router.put("/:id", updateTestimonial);
Router.delete("/:id", deleteTestimonial);

module.exports = Router;  // Corrected the typo here
