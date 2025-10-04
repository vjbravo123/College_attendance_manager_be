import Attendance from "../Models/Attendance.Model.js";
import Query from "../Models/Query.Model.js";

export const getAllQueries =async (req , res) =>{
       try {
         const {sub} = req.params;
        
        const Queryarr = await Query.find({subject:sub}).populate('student_id' , 'name roll_no');
        const data = Queryarr.map((q)=>({
            name : q.student_id.name ,
            rollNo : q.student_id.roll_no ,
            query : q.query ,
            student_id : q.student_id._id,
            id : q._id
        }))
        if(!data){return res.status(404).json({message : "No queries found"})}

        return res.status(201).json(data)
       } catch (error) {
        console.error("Error while fetching queries : ", error)
       }
        
}

export const deleteQuery = async (req , res) =>{
    const { id } = req.params;
    const deleted = await Query.findByIdAndDelete({_id:id});
    console.log(deleted);
    res.json({message:"Query deleted sucessfully" , queryDeleted:true , deleted})
    
}

export const getAttendanceOfQuery = async (req , res) =>{
    const {studentId , subject} = req.params;
    const arr = await Attendance.find({student_id:studentId , subject}).populate('student_id' , 'name roll_no');
    const data = arr.map((r)=>({
        name : r.student_id.name,
        roll_no : r.student_id.roll_no,
        date: r.date ,
        status : r.status ? "Present" : "Absent",
        _id : r._id
    }))
    res.json(data)
}

export const changeQueriedAttendance =async (req , res) =>{
    const {AttendanceID} = req.params;
    const {status} = req.body;
    const data = await Attendance.findByIdAndUpdate({_id:AttendanceID} , {$set:{status : status==='Present' ? true : false}} , {new:true});
    res.json({message:"Attendance Corrected Sucessfully"})   
}