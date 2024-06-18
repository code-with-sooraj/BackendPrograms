const mongoose = require('mongoose');

//connect to mongoDB
mongoose.connect(process.env.MONGO_URI).then((data)=>{
    console.log("Connected to MongoDB");
})


//Define schemas 
const AdminSchema = new mongoose.Schema({
    username : {type: String , unique: true, required:true},
    password : {type: String , required:true},
    courses: [{type: mongoose.Schema.Types.ObjectId,ref:"Course"}],
});

const userSchema = new mongoose.Schema({
    username : {type: String , unique: true, required:true},
    password : {type: String , required:true},
    mycourses: [{type: mongoose.Schema.Types.ObjectId,ref:"Course"}],
});

const courseSchema = new mongoose.Schema({
    title: String,
    desciption : String,
    price : Number,
    image : String,
    owner : String,
    published  : {type: Boolean , defaults:false},
});

const Admin = mongoose.model("Admin",AdminSchema);
const User = mongoose.model("User",userSchema);
const Course = mongoose.model("Course",courseSchema);

module.exports = {Admin,User,Course};