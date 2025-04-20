const { Blog } = require("../Models/Blog");

// ========== API CONTROLLERS ==========

// CREATE (API)
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

// DELETE (API)
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

// UPDATE (API)
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

// GET ALL (API)
const getallBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Error while getting blogs", error });
  }
};



// ========== ADMIN VIEW CONTROLLERS ==========

// Show All Blogs (Admin Panel)
const showBlogAdmin = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.render("admin/blog-view", { blogs });
  } catch (error) {
    res.status(500).send("Error loading blog admin page");
  }
};

// Show Add Blog Form (GET)
const showAddBlogForm = (req, res) => {
  res.render("admin/blog-new");
};

// Handle Add Blog Form (POST)
const handleAddBlogForm = async (req, res) => {
  try {
    const { title, content } = req.body;
    await Blog.create({ title, content });
    res.redirect("/api/blogs/admin/view");
  } catch (error) {
    res.status(500).send("Error adding blog");
  }
};

// Show Edit Blog Form (GET)
const showEditBlogForm = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).send("Blog not found");
    res.render("admin/blog-edit", { blog });
  } catch (error) {
    res.status(500).send("Error loading edit form");
  }
};

const handleEditBlogForm = async (req, res) => {
  try {
    const { title, content } = req.body;  // Get title and content from the form data
    const blogid = req.params.id;  
    if (!title || !content) {
      return res.status(400).send("Title and Content are required.");
    }

    // Update the blog post in the database
    const updatedBlog = await Blog.findByIdAndUpdate(blogid, { title, content }, { new: true });

    // If the blog wasn't found, return an error
    if (!updatedBlog) {
      return res.status(404).send("Blog not found.");
    }

    // Redirect to the blog list page after successful update
    res.redirect("/api/blogs/admin/view");
  } catch (error) {
    console.error(error);  // Log the error for debugging
    res.status(500).send("Error updating blog.");
  }
};


// Handle Delete Blog (POST)
const handleDeleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.redirect("/api/blogs/admin/view");
  } catch (error) {
    res.status(500).send("Error deleting blog");
  }
};

// Export all
module.exports = {
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
};
