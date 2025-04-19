const express=require("express");
const Router= express.Router()
const { createproject, updateproject, deleteproject, getallprojects }=require("../Controllers/projectcontroller")


Router.post("/",createproject);
Router.get("/",getallprojects);
Router.put("/:id",updateproject);
Router.delete("/:id",deleteproject);
module.exports=Router