const {Skill}=require("../Models/Skill")

const createskill=async(req,res)=>{
    try{
        const{skills,level}=req.body
        const newskill=new Skill({
            skills,
            level
    })
    if(!createskill){
        res.status(404).json({message:"Eror in creating skills"})
    }
    const saveskill=await newskill.save()
    res.status(201).json({saveskill})
    }
    catch(eror){
  res.status(500).json ({message:"eror in adding skills"})
    }
}


const getallskills=async(req,res)=>{
   
   try{
    const skills=await Skill.find()
    res.status(201).json(skills)
 if(!getallskills){
    res.status(404).json({message:"Eror in creating skills"})
 }

   }
   catch(err){
    res.status(500).json({message:"Eror in adding skills"},err)
    
   }

}
const updateskill=async(req,res)=>{
    try{
        const {skills,level}=req.body
        const {id}=req.params
        const updatedskill= await Skill.findByIdAndUpdate(
            id,
            {
                skills,
                level

            },{new:true}
        )
        if(!updateskill){
            return res.status(404).json({message:"contact not updated"})
        }
        return res.status(200).json({message:"contact updated",updatedskill})

    }
    catch(eror){
    return res.status(500).json({message:"Server eror",eror})
    }
}
const deleteskill=async(req,res)=>{
try{
    const {id}=req.params
     const skilldelted=await Skill.findByIdAndDelete(id)
    if(!deleteskill){
     return  res.status(404).json({messsage:"Skill not delted"})

    }
return res.status(200).json({message:"skill deleted"})

}
catch(eror){
return res.status(500).json({message:"Server Eror"})
}
}