import Attendance from "../Models/Attendance.Model.js";
import Student from "../Models/Students.Model.js";

const getAttendance_From_Subject = async (req , res) =>{
    const {subject , roll_no} = req.params;
    console.log(subject  ,roll_no);
    const studentdata = await Student.findOne({roll_no});
    const student_id = studentdata._id;
    console.log(student_id);
    const attendanceRecord = await Attendance.find({student_id} , {_id:0 , date:1 , status:1});
    console.log(attendanceRecord);
    res.json(attendanceRecord)
    
    
    // const data = await Attendance.find({subject})
    // console.log(data);
    
    
}

export default getAttendance_From_Subject;