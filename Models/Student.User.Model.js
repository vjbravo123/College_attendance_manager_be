import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    username:{type:String , required:true , trim:true},
     password:{type:String , required:true , trim:true},
     roll_no:{type:Number , required:true },
})

const StudentCred = mongoose.model("Student_Cred" , studentSchema);

export default StudentCred;