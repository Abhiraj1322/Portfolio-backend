const express=require("express")
const Router=express.Router()
const { createTestimonial,getAllTestimonials,updateTestimonial,deleteTestimonial}=require("../Controllers/testimonialcontroller");

Router.post("/",createTestimonial);
Router.get("/",getAllTestimonials);
Router.put("/:id",updateTestimonial);
Router.delete("/:id",deleteTestimonial);

module.export=Router
