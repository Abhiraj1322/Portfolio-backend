const mongoose = require('mongoose');
const { Schema } = mongoose;

const BlogSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true }
});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = { Blog };  