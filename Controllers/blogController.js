const { Blog } = require("../Models/blog");

// CREATE
const createblog = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newBlog = new Blog({ title, content });
    const savedBlog = await newBlog.save();  
    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(500).json({ message: "Error while adding the blog", error });
  }
};

// DELETE
const deleteblog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    return res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

// UPDATE
const updateblog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }  
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    return res.status(200).json({
      message: "Blog updated successfully",
      updatedBlog
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error while updating the blog", error });
  }
};

// GET ALL
const getallBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Error while getting blogs", error });
  }
};

module.exports = { createblog, deleteblog, updateblog, getallBlogs };
