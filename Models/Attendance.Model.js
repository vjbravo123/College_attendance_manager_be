import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
    student_id : {type : mongoose.Schema.Types.ObjectId , ref:"Student" , required:true},
    date : {type:Date , required:true } ,
    status : {type:Boolean , required:true},
    subject : {type : String , required:true}
} , {timestamps:true})

attendanceSchema.index({date:1 , subject:1});


const Attendance = mongoose.model("Attendance" , attendanceSchema);

export default Attendance;

