import Attendance from "../Models/Attendance.Model.js";

export const takeAttendance = async (req, res) => {
    try {
        const { students, AttendanceMap, subject } = req.body;

        let date = new Date();

        const attendanceRecord = students.map((student) => ({
            student_id: student._id,
            date: date,
            status: AttendanceMap[student.roll_no] || false,
            subject: subject
        }))

        await Attendance.insertMany(attendanceRecord);

        return res.status(201).json({
            message: 'Attendance Recorded Sucessfully',
            data: attendanceRecord
        })
    } catch (error) {
        console.error("Error taking attendance:", error);
        return res.status(500).json({ message: "Server error", error: error.message });
    }

}