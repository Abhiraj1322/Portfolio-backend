const mongoose=require("mongoose")
const SKills = mongoose.Schema;
const { Schema } = mongoose;
const ObjectId = Schema.Types.ObjectId;
const SkillsSchema = new Skills({
  id: ObjectId,
  Skills:{type: String,required:true},
  level:{type:String,require:true}

});
module.exports=mongoose.model(SKills,SkillsSchema)