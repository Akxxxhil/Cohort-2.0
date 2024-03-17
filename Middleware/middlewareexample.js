const express=require("express")
const app=express()

let numberofrequestgoes1=0;
function numberofrequestgoes(req,res,next){
    numberofrequestgoes1++;
    console.log(numberofrequestgoes1);
    // const startTime1=Date.now()
    // console.log(startTime1);
    next()

}
// function numberofrequestgoes2(req,res,next){
//     numberofrequestgoes1++;
//     console.log(numberofrequestgoes1);
//     const startTime2=Date.now()
//     console.log(startTime2);
//     next()

// }
app.use(numberofrequestgoes)  //middleware
// app.use(numberofrequestgoes2)  //middleware


app.post('/healthy', function(req,res){
    res.json({
        msg:"every thing is ok"
    })
})
app.get('/healthy2', function(req,res){
    res.json({
        msg:"ok okk okkk"
    })
})

app.listen(3001)

//Middleware is software that provides common services and capabilities to applications outside of what's offered by the operating system.