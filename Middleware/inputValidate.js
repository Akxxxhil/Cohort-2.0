const express=require("express")
const app=express()

app.use(express.json())

app.post("/",function(req,res){
    const kideny=req.body.kidney;
    const kidenylength=kideny.length;

    res.send("you have " + kidenylength)
})


app.use(function(err,req,res,next){
    res.json({
        msg:"something is wrong with the inputs"
    })
})
app.listen(3002)