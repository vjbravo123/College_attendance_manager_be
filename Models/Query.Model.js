import mongoose from "mongoose";

const querySchema = new mongoose.Schema({
    student_id:{type:mongoose.Schema.Types.ObjectId , ref:"Student" , required:true},
    query : {type :String , required:true , trim:true},
    subject : {type : String , required : true , trim : true}
})

const Query = mongoose.model("Student_Queries" , querySchema);

export default Query;