import express from 'express';
import cors from 'cors';
import loginRouter from './Routes/Login.Routes.js';
import attendanceRouter from './Routes/Attendance.Rotues.js';
import connectDB from './Config/ConnectDb.js';
import queryRouter from './Routes/Query.Router.js';
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors())

connectDB('mongodb://127.0.0.1:27017/College');

app.use('/auth', loginRouter);

app.use('/attendance' , attendanceRouter)

app.use('/query' , queryRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

})