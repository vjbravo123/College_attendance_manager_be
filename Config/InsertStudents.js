import Student from "../Models/Students.Model.js";
import connectDB from "./ConnectDb.js";
import dotenv from 'dotenv';
dotenv.config();
connectDB(process.env.MONGO_URI);

const sampleData = [
  {"name": "Aarav", "roll_no": 1, "class_id": "CLS101"},
  {"name": "Vivaan", "roll_no": 2, "class_id": "CLS101"},
  {"name": "Aditya", "roll_no": 3, "class_id": "CLS101"},
  {"name": "Vihaan", "roll_no": 4, "class_id": "CLS101"},
  {"name": "Arjun", "roll_no": 5, "class_id": "CLS101"},
  {"name": "Sai", "roll_no": 6, "class_id": "CLS101"},
  {"name": "Reyansh", "roll_no": 7, "class_id": "CLS101"},
  {"name": "Krishna", "roll_no": 8, "class_id": "CLS101"},
  {"name": "Ishaan", "roll_no": 9, "class_id": "CLS101"},
  {"name": "Rohan", "roll_no": 10, "class_id": "CLS101"},
  {"name": "Ananya", "roll_no": 11, "class_id": "CLS101"},
  {"name": "Diya", "roll_no": 12, "class_id": "CLS101"},
  {"name": "Aadhya", "roll_no": 13, "class_id": "CLS101"},
  {"name": "Myra", "roll_no": 14, "class_id": "CLS101"},
  {"name": "Ira", "roll_no": 15, "class_id": "CLS101"},
  {"name": "Saanvi", "roll_no": 16, "class_id": "CLS101"},
  {"name": "Prisha", "roll_no": 17, "class_id": "CLS101"},
  {"name": "Anika", "roll_no": 18, "class_id": "CLS101"},
  {"name": "Navya", "roll_no": 19, "class_id": "CLS101"},
  {"name": "Kiara", "roll_no": 20, "class_id": "CLS101"},
  {"name": "Kabir", "roll_no": 21, "class_id": "CLS101"},
  {"name": "Shaurya", "roll_no": 22, "class_id": "CLS101"},
  {"name": "Aryan", "roll_no": 23, "class_id": "CLS101"},
  {"name": "Dhruv", "roll_no": 24, "class_id": "CLS101"},
  {"name": "Rudra", "roll_no": 25, "class_id": "CLS101"},
  {"name": "Atharv", "roll_no": 26, "class_id": "CLS101"},
  {"name": "Parth", "roll_no": 27, "class_id": "CLS101"},
  {"name": "Om", "roll_no": 28, "class_id": "CLS101"},
  {"name": "Dev", "roll_no": 29, "class_id": "CLS101"},
  {"name": "Yash", "roll_no": 30, "class_id": "CLS101"},
  {"name": "Avni", "roll_no": 31, "class_id": "CLS101"},
  {"name": "Riya", "roll_no": 32, "class_id": "CLS101"},
  {"name": "Meera", "roll_no": 33, "class_id": "CLS101"},
  {"name": "Aarohi", "roll_no": 34, "class_id": "CLS101"},
  {"name": "Sneha", "roll_no": 35, "class_id": "CLS101"},
  {"name": "Nisha", "roll_no": 36, "class_id": "CLS101"},
  {"name": "Kavya", "roll_no": 37, "class_id": "CLS101"},
  {"name": "Ishita", "roll_no": 38, "class_id": "CLS101"},
  {"name": "Tanya", "roll_no": 39, "class_id": "CLS101"},
  {"name": "Simran", "roll_no": 40, "class_id": "CLS101"},
  {"name": "Harsh", "roll_no": 41, "class_id": "CLS101"},
  {"name": "Manav", "roll_no": 42, "class_id": "CLS101"},
  {"name": "Nikhil", "roll_no": 43, "class_id": "CLS101"},
  {"name": "Raj", "roll_no": 44, "class_id": "CLS101"},
  {"name": "Siddharth", "roll_no": 45, "class_id": "CLS101"},
  {"name": "Karan", "roll_no": 46, "class_id": "CLS101"},
  {"name": "Pranav", "roll_no": 47, "class_id": "CLS101"},
  {"name": "Varun", "roll_no": 48, "class_id": "CLS101"},
  {"name": "Sameer", "roll_no": 49, "class_id": "CLS101"},
  {"name": "Vivek", "roll_no": 50, "class_id": "CLS101"}
]

const insertData = async (sampleData) =>{
    try {
        await Student.insertMany(sampleData);
        console.log("Sample data added sucessfully");
    } catch (error) {
        console.error("Error while inserting sample data to database : " ,error);
    }
}

insertData(sampleData);