const express=require("express")
const Router=express.Router()
const { createskill, getallskills, updateskill, deleteskill,showAddSkillsform,handleAddSkillForm,showEditSkillForm,handleEditSkillForm,showSkillsAdmin,handleDeleteSkill }=require("../Controllers/SkillController");


Router.post("/",createskill);
Router.get("/",getallskills);
Router.put("/:id",updateskill);
Router.delete("/:id",deleteskill)


//admin view
Router.get("/admin/view",showSkillsAdmin)
Router.get("/admin/add",showAddSkillsform)
Router.post("/admin/add",handleAddSkillForm)
Router.get("/admin/edit/:id",showEditSkillForm)
Router.post("/admin/edit/:id",handleEditSkillForm)
Router.post("/admin/delete/:id",handleDeleteSkill)

module.exports=Router   