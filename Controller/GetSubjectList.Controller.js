import User from "../Models/User.Model.js";

const getSubjectList = async (req , res) =>{
    const data = await User.find({} , {subject:1 , _id:0});
    if(!data){return res.status(404).json({message:"No subjects to display"})}
    res.status(200).json(data);
}

export default getSubjectList;