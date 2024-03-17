const express=require("express")
const app=express()
const zod=require("zod")
const Schema=zod.array(zod.number())

app.use(express.json())

app.post("/health",function(req,res){
    const kidenys=req.body.kidenys;
    const response=Schema.safeParse(kidenys)
    if(!response.success){
        res.status(411).json({
            msg:"inavlid input"
        })
    }
   else{
    res.json({
        response
    })
   }
})
app.listen(3006)