const { Router } = require("express");
const adminMiddleware =require("../middleware/admin");
const users = require("..");
const { Admin, Course }= require("../db");
const router = Router();

//Admin routes 
router.post('/signup',async(res,req)=>{
    const {username,password} =  req.body;
    if(!username || !password){
        return res.status(400).send({message: "Please provide username and password"});
    }
    try{
        await Admin.create({
            username,
            password
        });
        return res.status(201).send({
            message: "Admin created successfully"
        });

    }catch(error){
        return res.status(500).send({message: "Internal server error", error:error});
    }
});

router.post("/course",adminMiddleware,async (req,res)=>{
    const {name,description,price,imageLink}= req.body;
    if(!name || !description || !price || !imageLink){
        return res.status(400).send({message: "Please provide name and description"});
    }
    try{
        const admin = await Admin.findById(req.admin._id);
        const course = await Course.create({
            name,
            description,
            price,
            imageLink,
            published_year: true,
            owner : admin.username,
        });
        admin.courses.push(course._id);
        await admin.save();
        return res.status(201).send({
            message: "Course created successfully",
            courseId: course._id,
        });
    }catch(error){
        return res.status(500).send({message: "Error creating course", error:error});
    }
});

router.get("/courses",adminMiddleware,async(req,res)=>{
    try{
        const admin = await Admin.findById(req.admin._id).populate("courses");
        return res.status(200).send({courses:admin.courses});
    }catch(error){
        return res.status(500).send({message: "Error fetching courses", error:error});
    }
});

module.exports = router;