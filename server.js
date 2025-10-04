import express from 'express';
import cors from 'cors';
import loginRouter from './Routes/Login.Routes.js';
import attendanceRouter from './Routes/Attendance.Rotues.js';
import connectDB from './Config/ConnectDb.js';
import queryRouter from './Routes/Query.Router.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const uri = process.env.MONGO_URI;
const PORT = process.env.PORT || 8080;
const CLIENT = process.env.CLIENT;


app.use(express.json());
app.use(cors({
    origin : `${CLIENT}`,
    methods : [ 'GET','POST' , 'PUT' , 'DELETE'],
    credentials: true
}))

connectDB(uri);

app.use('/auth', loginRouter);

app.use('/attendance' , attendanceRouter)

app.use('/query' , queryRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

})