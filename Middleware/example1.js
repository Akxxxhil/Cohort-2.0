const express = require("express");
const app = express();

app.get("/health-checkup", function (req, res) {
    const username=req.headers.username
    const password=req.headers.password
    const kidneyid=req.query.kidneyid

    if (username!="akhil" || password!="pass"){
        res.status(400).json({
            msg:"something is wrong"
        })
        return
    }
    if(kidneyid!=1 && kidneyid!=2){
        res.status(400).json({
            msg:"something is wrong"
        })
        
return
    }
    res.json({
        msg:"your kideny is fine"
    })
})

app.listen(3002)


