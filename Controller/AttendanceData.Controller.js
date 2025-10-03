import Student from "../Models/Students.Model.js"

export const getAttendanceData = async (req, res) => {
    try {
        const data = await Student.find({}, { class_id: 0, __v: 0, createdAt: 0, updatedAt: 0 });
        if (!data) {
            return res.status(404).json({ message: "No attendance Data found" });
        }
        return res.json(data )

    } catch (error) {
        console.error(`Internal Server Error happened : ${error}`);
    }

}