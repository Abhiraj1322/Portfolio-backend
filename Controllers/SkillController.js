const { Skill } = require("../Models/skill");

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
///Admin panel controller
//show all skills in admin panel

const showSkillsAdmin=async(req,res)=>{
  try{
    const skills=await Skill.find();
    res.render("admin/skill-view",{skills})
  }catch(error){
    console.error("Eror loeading skill admin page",error)
    res.status(500).send("Eror loading skill admin page")
  }
}
//Show add skill form 
const showAddSkillsform=(req,res)=>{
  res.render("admin/skill-new")
}
//handle addskiles
const handleAddSkillForm=async(req,res)=>{
  try{
    const { skills, level } = req.body;
    await Skill.create( { skills, level });
    res.redirect("/api/skills/admin/view")
  }
  catch(error){
  console.error("Eror adding project")
  }
} 
// Show edit project form (admin)
const showEditSkillForm = async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    if (!skill) return res.status(404).send("Project not found");
    res.render("admin/skill-edit", { skill });
  } catch (error) {
    console.error("Error loading edit form:", error);
    res.status(500).send("Error loading edit form");
  }
};
//handle edit 

const handleEditSkillForm = async (req, res) => {
  try {
    const { skills, level } = req.body;
    const skillid = req.params.id;

    if (!skills || !level) {
      return res.status(400).send("Skills and level are required.");
    }

    const updatedSkill = await Skill.findByIdAndUpdate(
      skillid,
      { skills, level },
      { new: true }
    );

    if (!updatedSkill) {
      return res.status(404).send("Skill not found.");
    }

    res.redirect("/api/skills/admin/view");
  } catch (error) {
    console.error("Error updating skill:", error);
    res.status(500).send("Error updating skill.");
  }
};


const handleDeleteSkill = async (req, res) => {
  try {
    await Skill.findByIdAndDelete(req.params.id);
    res.redirect("/api/skills/admin/view");
  } catch (error) {
    console.error("Error deleting skill:", error);
    res.status(500).send("Error deleting skill");
  }
};



module.exports = { createskill, getallskills, updateskill, deleteskill,handleEditSkillForm,showAddSkillsform,handleAddSkillForm,showEditSkillForm,handleEditSkillForm,showSkillsAdmin,handleDeleteSkill };
