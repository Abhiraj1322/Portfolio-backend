const { Contact } = require("../Models/contact");

const createcontact = async (req, res) => {
  try {
    const { name, email, message, status } = req.body;
    const newcontact = new Contact({ name, email, message, status });

    const savecontact = await newcontact.save();

    if (!savecontact) {
      return res.status(400).json({ message: "Error in creating contact" });
    }

    res.status(201).json(savecontact);
  } catch (error) {
    res.status(500).json({ message: "Error in adding contact", error });
  }
};


const getallcontacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ message: "Error in getting contacts", err });
  }
};


const updatecontact = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, message, status } = req.body;

    const updatedcontact = await Contact.findByIdAndUpdate(
      id,
      { name, email, message, status },
      { new: true }
    );

    if (!updatedcontact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    return res.status(200).json({
      message: "Contact updated successfully",
      updatedcontact,
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};


const deletecontact = async (req, res) => {
  try {
    const { id } = req.params;

    const contactdeleted = await Contact.findByIdAndDelete(id);

    if (!contactdeleted) {
      return res.status(404).json({ message: "Contact not found" });
    }

    return res.status(200).json({
      message: "Contact deleted successfully",
      contactdeleted,
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};

module.exports = { createcontact, getallcontacts, updatecontact, deletecontact };
