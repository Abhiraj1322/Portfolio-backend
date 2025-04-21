const express = require("express");
const Router = express.Router();

const{
  createblog,
  deleteblog,
  updateblog,
  getallBlogs,
  showBlogAdmin,
  showAddBlogForm,
  handleAddBlogForm,
  showEditBlogForm,
  handleEditBlogForm,
  handleDeleteBlog
} = require("../Controllers/BlogController");

Router.post("/", createblog);
Router.get("/", getallBlogs);
Router.put("/:id", updateblog);
Router.delete("/:id", deleteblog);

///admin view
Router.get("/admin/view", showBlogAdmin); // view all blogs
Router.get("/admin/add", showAddBlogForm); // add form
Router.post("/admin/add", handleAddBlogForm); // handle add
Router.get("/admin/edit/:id", showEditBlogForm); // edit form
Router.post("/admin/edit/:id", handleEditBlogForm); // handle edit
Router.post("/admin/delete/:id", handleDeleteBlog); // delete

module.exports = Router;
