const { Skill } = require("../Models/Skill");

// CREATE SKILL
const createskill = async (req, res) => {
  try {
    const { skills, level } = req.body;

    const newskill = new Skill({ skills, level });
    const saveskill = await newskill.save();

    if (!saveskill) {
      return res.status(400).json({ message: "Error in creating skill" });
    }

    res.status(201).json({ message: "Skill created", saveskill });
  } catch (error) {
    res.status(500).json({ message: "Server error while adding skill", error });
  }
};

// GET ALL SKILLS
const getallskills = async (req, res) => {
  try {
    const skills = await Skill.find();
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ message: "Server error while fetching skills", error });
  }
};

// UPDATE SKILL
const updateskill = async (req, res) => {
  try {
    const { id } = req.params;
    const { skills, level } = req.body;

    const updatedskill = await Skill.findByIdAndUpdate(
      id,
      { skills, level },
      { new: true }
    );

    if (!updatedskill) {
      return res.status(404).json({ message: "Skill not found or not updated" });
    }

    return res.status(200).json({ message: "Skill updated", updatedskill });
  } catch (error) {
    return res.status(500).json({ message: "Server error while updating skill", error });
  }
};

// DELETE SKILL
const deleteskill = async (req, res) => {
  try {
    const { id } = req.params;
    const skilldeleted = await Skill.findByIdAndDelete(id);

    if (!skilldeleted) {
      return res.status(404).json({ message: "Skill not found or not deleted" });
    }

    return res.status(200).json({ message: "Skill deleted", skilldeleted });
  } catch (error) {
    return res.status(500).json({ message: "Server error while deleting skill", error });
  }
};

module.exports = { createskill, getallskills, updateskill, deleteskill };
