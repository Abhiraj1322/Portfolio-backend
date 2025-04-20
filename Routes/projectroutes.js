const express=require("express");
const Router= express.Router()
const { createproject, updateproject, deleteproject, getallprojects,showProjectsAdmin,showAddProjectform,handleAddProjectForm,handleEditProjectForm,handleDeleteProject, showEditProjectForm }=require("../Controllers/projectcontroller");



Router.post("/",createproject);
Router.get("/",getallprojects);
Router.put("/:id",updateproject);
Router.delete("/:id",deleteproject);
 ///adimn view routes
Router.get("/admin/view",showProjectsAdmin);//view all projects
Router.get("/admin/add",showAddProjectform);//add porjectform
Router.post("/admin/add",handleAddProjectForm);//handele add
Router.get("/admin/edit/:id",showEditProjectForm);//edit//form
Router.post("/admin/edit/:id",handleEditProjectForm);//handle/edit
Router.post("/admin/delete/:id",handleDeleteProject)//delete


module.exports=Router