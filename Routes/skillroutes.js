const express=require("express")
const Router=express.Router()
const { createskill, getallskills, updateskill, deleteskill }=require("../Controllers/skillcontroller")

Router.post("/",createskill);
Router.get("/",getallskills);
Router.put("/:id",updateskill);
Router.delete("/:id",deleteskill)

module.exports=Router