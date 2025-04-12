const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors');
require('dotenv').config();
const app =express()

app.use(cors())
app.use(express.json());
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));


app.get("/",(req,res)=>{
    res.send("Server runnig on port")
})
const PORT=process.env.PORT ||8000  

app.listen(PORT,()=>{
    console.log(`Server  runnig port ${PORT}`)
})