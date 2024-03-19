const express=require("express")
const mongoose=require("mongoose")
mongoose.connect("")

const app=express()

app.use(express.json())
const Usermodel=mongoose.model("users",{
    email:String,
    name:String,
    password:String
})

app.post("/signup", async function (req,res){
    const useremail=req.body.useremail;
    const username=req.body.username;
    const userpassword=req.body.userpassword;

    const existUser= await Usermodel.findOne({
        email:useremail
    })
    if(existUser){
        res.status(400).json({
            msg:"user alreday exist"
        })
    }

    const neweuser=new Usermodel({
    email:useremail,
    name:username,
    password:userpassword

    })
    neweuser.save();
    res.json({
        msg:"user created successfully"
    })
    
})
