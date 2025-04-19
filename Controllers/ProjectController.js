const {Project}=require("../Models/Project")

const createproject=async(req,res)=>{
    try{
    const{title,description,technologies,repo_link,live_link,status}=req.body
    const newproject=new Project({
  title,
  description,
  technologies,
  repo_link,
  live_link,
  status
    })
    if(!createproject){
        res.status(400).json({message:" project not found" })
    }
    const saveproject=newproject.save();
    res.status(201).json({message:"Project added successfully"})
    }
    catch(eror){
     res.status(500).json({message:"Blog"})
    }
}
const updateproject=async(req,res)=>{
  try{
   const{id}=req.params
   const{title,description,technologies,repo_link,live_link,status}=req.body
   const updatedproject=new Project.findByIdAndUpdate(
    id,
    {
      title,description,technologies,repo_link,live_link,status
    },{new:true}
   )
   if(!updateproject){
    return res.status(404).json({message:"project not updated"})
  }
  return res.status(200).json({message:"Contact updated"},updatedproject)
  }
  catch(eror){
return res.status(500).json({message: "server eror",eror})
  }
}
const deleteproject=async(req,res)=>{
  try{
const {id}=req.params
const {title,description,technologies,repo_link,live_link,status}=req.body
const projectdeleted=await Project.findByIdAndDelete(id)
if(!deleteproject){
  return res.status(404).json({message:"project not deleted"})
}
return res.status(200).json({message:"Project delted"}),
projectdeleted

}
  catch(eror){
  return res.status(500).json({message:"server eror"})
  }
}
const getallprojects=async(req,res)=>{
  try{
    const projects=await Project.find()
    if(!getallprojects){
      res.status(404).json({message:"Eror in getting all projects"})
    }
  }
  catch(err){
  res.status(500).json({message:"eror in adding contact"},err)
  }
}