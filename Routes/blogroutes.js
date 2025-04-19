const express=require("express")
const Router=express.Router()
const  { createblog, deleteblog, updateblog, getallBlogs }=require("../Controllers/blogController");
const { route } = require("./ContactRoutes");
 
Router.post("/",createblog);
Router.get("/",getallBlogs);
Router.put("/:id",updateblog);
Router.delete("/:id",deleteblog);
 

module.exports=Router