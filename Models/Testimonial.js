const mongoose = require('mongoose');
const { Schema } = mongoose;

const TestimonialSchema = new Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Testimonial = mongoose.model('Testimonial', TestimonialSchema);

module.exports = { Testimonial };
