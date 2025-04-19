    const express=require("express")
    const router= express.Router()
    const { createcontact, getallcontacts, updatecontact, deletecontact }=require("../Controllers/ContactController")

    router.post("/",createcontact);
    router.get("/",getallcontacts);
    router.put("/:id",updatecontact);
    router.delete("/:id",deletecontact);
    