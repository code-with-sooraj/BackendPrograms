//Middleware
const express = require('express')
const app = express()


function ageCheck(req,res,next){
    const age = req.query.age;
    if(age >=18){
        next();
    }else{
            res.send("You are not allowed to ride");
        }
}
// app.use(ageCheck); Using this will make the 
// app.get('/ride1',(req,res)=>{
//     res.send("You are allowed to ride1");
// })

// app.get('/ride2',(req,res)=>{
//     res.send("You are allowed to ride2");
// })


app.get('/ride1',ageCheck,(req,res)=>{
    res.send("You are allowed to ride1");
})

app.get('/ride2',ageCheck,(req,res)=>{
    res.send("You are allowed to ride2");
})

app.listen(3000);