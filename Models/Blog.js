const mongoose=require('mongoose')
const Blogs=mongoose.Schema
const { Schema } = mongoose;
const ObjectId = Schema.Types.ObjectId;
 const BlogSchema=new Blogs({
    id:ObjectId,
    title:{type:String,required:true},
    content:{type:String,required:true}
 })
    
module.exports=mongoose.model(Blogs,BlogSchema)