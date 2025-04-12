const mongoose=require("mongoose")
const Contact=mongoose.Schema
const { Schema } = mongoose;
const ObjectId = Schema.Types.ObjectId;
const Contacts=mongoose.Schema;
const ContactsSchema=new Contact({
    id:ObjectId,
    name:{type:String, required:true,},
    email:{type:String,required:true},
    message:{type:String,required:true},
    Status:{type:String,rquired:true}, 
    match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],


})
module.exports=mongoose.model(Contacts,ContactsSchema)

