const express = require("express");
const app = express();
app.use(express.json());
app.post("/health-checkup",(req,res)=>{
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;
    res.send("You have "+kidneyLength+" kidneys.");
});

app.use(function(err,req,res,next){
    res.json({
        "msg":"Something went wrong."
    })
})
    
app.listen(3000);