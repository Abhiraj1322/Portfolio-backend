const mongoose=require('mongoose')
const { Schema } = mongoose;
const ObjectId = Schema.Types.ObjectId;
const Porjects=mongoose.Schema

const PorjectSchema=new Porjects({
    id:ObjectId,
    title:{type:String,require:true},
    description :{type:String, require:true},
    technologies:{type:String, require:true},
    repo_link:{type:String},
    live_link:{type:String},
    Statuss:{type:String},
})
module.exports=mongoose.model(Porjects,PorjectSchema)