const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProjectSchema = new Schema({
 title: { type: String, required: true },
  description: { type: String, required: true },
  technologies: { type: String, required: true },
  repo_link: { type: String },
  live_link: { type: String },
  status: { type: String }
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = { Project };
