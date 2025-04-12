const mongoose=require("mongoose")
const Testimonial=mongoose.Schema
const { Schema } = mongoose;
const ObjectId = Schema.Types.ObjectId;
const TestimonialSchema= new Testimonial({
    id:ObjectId,
    name:{type:String,required:true},
    role:{type:String,required:true},
    message:{type:String,require:true},
    date:{type:Date,default:Date.now}
})
module.exports=mongoose.model(Testimonial,TestimonialSchema)