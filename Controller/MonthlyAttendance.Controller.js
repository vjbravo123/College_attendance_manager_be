import Attendance from "../Models/Attendance.Model.js";

const getMonthlyAttendance = async (req , res) => {
    const {subject} = req.params;
    // Get current year and month
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth(); // 0 = Jan, 9 = Oct

    // Start of the month
    const startDate = new Date(year, month, 1);

    // End of the month
    const endDate = new Date(year, month + 1, 0, 23, 59, 59, 999);

    const MonthlyAttendance = await Attendance.find({
        date : {
            $gte : startDate,
            $lte : endDate,
        },
        subject:subject
    } , {student_id:1 , _id:0 , date:1 , status:1}).populate('student_id' , 'name roll_no -_id ')

    const attendanceArr = MonthlyAttendance.map((e)=>({
        name : e.student_id.name ,
        date:e.date ,
        Attendance : e.status ? "Present" : "Absent",
        roll_no : e.student_id.roll_no
    }))
    
    res.json(attendanceArr)

}

export default getMonthlyAttendance;