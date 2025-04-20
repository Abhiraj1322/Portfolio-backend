const { Project } = require("../Models/project");

// CREATE PROJECT (API)
const createproject = async (req, res) => {
  try {
    const { title, description, technologies, repo_link, live_link, status } = req.body;

    const newproject = new Project({ title, description, technologies, repo_link, live_link, status });
    const saveproject = await newproject.save();

    if (!saveproject) {
      return res.status(400).json({ message: "Failed to create project" });
    }

    res.status(201).json({ message: "Project added successfully", saveproject });
  } catch (error) {
    res.status(500).json({ message: "Error while adding project", error });
  }
};

// UPDATE PROJECT (API)
const updateproject = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, technologies, repo_link, live_link, status } = req.body;

    const updatedproject = await Project.findByIdAndUpdate(
      id,
      { title, description, technologies, repo_link, live_link, status },
      { new: true }
    );

    if (!updatedproject) {
      return res.status(404).json({ message: "Project not found" });
    }

    return res.status(200).json({ message: "Project updated successfully", updatedproject });
  } catch (error) {
    return res.status(500).json({ message: "Server error while updating project", error });
  }
};

// DELETE PROJECT (API)
const deleteproject = async (req, res) => {
  try {
    const { id } = req.params;

    const projectdeleted = await Project.findByIdAndDelete(id);

    if (!projectdeleted) {
      return res.status(404).json({ message: "Project not found" });
    }

    return res.status(200).json({ message: "Project deleted successfully", projectdeleted });
  } catch (error) {
    return res.status(500).json({ message: "Server error while deleting project", error });
  }
};

// GET ALL PROJECTS (API)
const getallprojects = async (req, res) => {
  try {
    const projects = await Project.find();
    return res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Error while fetching projects", error });
  }
};

//// ADMIN PANEL CONTROLLERS

// Show all projects in admin panel
const showProjectsAdmin = async (req, res) => {
  try {
    const projects = await Project.find();
    res.render("admin/project-view", { projects });
  } catch (error) {
    console.error("Error loading project admin page:", error);
    res.status(500).send("Error loading project admin page");
  }
};

// Show add project form (admin)
const showAddProjectform = (req, res) => {
  res.render("admin/project-new");
};

// Handle add project form (admin)
const handleAddProjectForm = async (req, res) => {
  try {
    const { title, description, technologies, repo_link, live_link, status } = req.body;
    await Project.create({ title, description, technologies, repo_link, live_link, status });
    res.redirect("/api/projects/admin/view");
  } catch (error) {
    console.error("Error adding project:", error);
    res.status(500).send("Error adding project");
  }
};

// Show edit project form (admin)
const showEditProjectForm = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).send("Project not found");
    res.render("admin/project-edit", { project });
  } catch (error) {
    console.error("Error loading edit form:", error);
    res.status(500).send("Error loading edit form");
  }
};

// Handle edit project form (admin)
const handleEditProjectForm = async (req, res) => {
  try {
    const { title, description, technologies, repo_link, live_link, status } = req.body;
    const projectid = req.params.id;

    if (!title || !description) {
      return res.status(400).send("Title and description are required.");
    }

    const updatedProject = await Project.findByIdAndUpdate(
      projectid,
      { title, description, technologies, repo_link, live_link, status },
      { new: true }
    );

    if (!updatedProject) {
      return res.status(404).send("Project not found.");
    }

    res.redirect("/api/projects/admin/view");
  } catch (error) {
    console.error("Error updating project:", error);
    res.status(500).send("Error updating project.");
  }
};

// Handle delete project (admin)
const handleDeleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.redirect("/api/projects/admin/view");
  } catch (error) {
    console.error("Error deleting project:", error);
    res.status(500).send("Error deleting project");
  }
};
///Admin Panel Controllers





module.exports = {
  createproject,
  updateproject,
  deleteproject,
  getallprojects,
  showProjectsAdmin,
  showAddProjectform,
  handleAddProjectForm,
  showEditProjectForm,
  handleEditProjectForm,
  handleDeleteProject,
};
