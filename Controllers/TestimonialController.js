const { Testimonial } = require("../Models/testimonial");


const createTestimonial = async (req, res) => {
  try {
    const { name, role, message } = req.body;

    const newTestimonial = new Testimonial({ name, role, message });
    const savedTestimonial = await newTestimonial.save();

    res.status(201).json({ message: "Testimonial created successfully", savedTestimonial });
  } catch (error) {
    res.status(500).json({ message: "Error creating testimonial", error });
  }
};

// READ all testimonials
const getAllTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ message: "Error fetching testimonials", error });
  }
};

// UPDATE a testimonial
const updateTestimonial = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, role, message } = req.body;

    const updatedTestimonial = await Testimonial.findByIdAndUpdate(
      id,
      { name, role, message },
      { new: true }
    );

    if (!updatedTestimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }

    res.status(200).json({ message: "Testimonial updated", updatedTestimonial });
  } catch (error) {
    res.status(500).json({ message: "Error updating testimonial", error });
  }
};

// DELETE a testimonial
const deleteTestimonial = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTestimonial = await Testimonial.findByIdAndDelete(id);

    if (!deletedTestimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }

    res.status(200).json({ message: "Testimonial deleted", deletedTestimonial });
  } catch (error) {
    res.status(500).json({ message: "Error deleting testimonial", error });
  }
};

module.exports = {
  createTestimonial,
  getAllTestimonials,
  updateTestimonial,
  deleteTestimonial
};
