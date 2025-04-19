const { Project } = require("../Models/project");

// CREATE PROJECT
const createproject = async (req, res) => {
  try {
    const { title, description, technologies, repo_link, live_link, status } = req.body;

    const newproject = new Project({
      title,
      description,
      technologies,
      repo_link,
      live_link,
      status,
    });

    const saveproject = await newproject.save();

    if (!saveproject) {
      return res.status(400).json({ message: "Failed to create project" });
    }

    res.status(201).json({ message: "Project added successfully", saveproject });
  } catch (error) {
    res.status(500).json({ message: "Error while adding project", error });
  }
};

// UPDATE PROJECT
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

// DELETE PROJECT
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

// GET ALL PROJECTS
const getallprojects = async (req, res) => {
  try {
    const projects = await Project.find();

    return res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Error while fetching projects", error });
  }
};

module.exports = { createproject, updateproject, deleteproject, getallprojects };
