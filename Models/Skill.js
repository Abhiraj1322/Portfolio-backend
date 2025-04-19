const mongoose = require('mongoose');
const { Schema } = mongoose;

const SkillSchema = new Schema({
  skills: { type: String, required: true },
  level: { type: String, required: true }
});

const Skill = mongoose.model('Skill', SkillSchema);

module.exports = { Skill };
