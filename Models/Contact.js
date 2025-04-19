const mongoose = require('mongoose');
const { Schema } = mongoose;

const ContactSchema = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"]
  },
  message: { type: String, required: true },
  status: { type: String, required: true }
});

const Contact = mongoose.model('Contact', ContactSchema);

module.exports = { Contact };
