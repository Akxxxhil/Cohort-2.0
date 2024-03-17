const express=require("express")
const app=express()

app.use(express.json())

app.post("/",function(req,res){
    const kideny=req.body.kidney;
    const kidenylength=kideny.length;

    res.send("you have " + kidenylength)
})

app.listen(3001)