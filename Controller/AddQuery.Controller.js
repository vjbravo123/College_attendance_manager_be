import Query from "../Models/Query.Model.js";
import Student from "../Models/Students.Model.js";

const addQuery = async (req , res) =>{
    const {roll_no , query } = req.body;

    const student = await Student.findOne({roll_no});
    const student_id = student._id;

    const queryResult = await Query.create({student_id , query});
    console.log(queryResult);
    res.json({message : "Query Submitted Sucessfully"})
    
}

export default addQuery;