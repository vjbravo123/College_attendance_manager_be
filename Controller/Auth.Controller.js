import StudentCred from "../Models/Student.User.Model.js";
import User from "../Models/User.Model.js";
import bcrypt from 'bcrypt';
export const teacherLogin =async (req, res) => {
    try {
        const { username, password } = req.body;
        const data = await User.findOne({ username });
        console.log(data);
        
        if (!data) { return res.status(404).json }

        const compare = await bcrypt.compare(password, data.password);

        if (compare) {
            return res.json({ validUser: true , subject:data.subject  })
        }
        else {
            return res.status(401).json({ validUser: false })
        }
    } catch (error) {
        console.error("Internal Server error :" ,error);
    }
}

export const teacherSignup = async (req, res) => {
    try {
        const { username, password , subject } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const data = await User.create({ username, password: hash , subject });
        return res.json(data);
    } catch (error) {
        console.error("Error while signup :" , error);
    }

}
export const studentSignup = async (req, res) => {
    try {
        const { username, password , roll_no } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const data = await StudentCred.create({ username, password: hash , roll_no });
        return res.json(data);
    } catch (error) {
        console.error("Error while signup :" , error);
    }

}


export const studentsLogin = async (req , res) =>{
    try {
        const { username, password } = req.body;
        
        const data = await StudentCred.findOne({ username });
        
        if (!data) { return res.status(404).json }

        const compare = await bcrypt.compare(password, data.password);

        if (compare) {
            return res.json({ validUser: true  , roll_no:data.roll_no})
        }
        else {
            return res.status(401).json({ validUser: false })
        }
    } catch (error) {
        console.error("Internal Server error :" ,error);
    }
}