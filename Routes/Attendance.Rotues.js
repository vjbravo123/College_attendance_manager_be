import express from 'express';
import { getAttendanceData } from '../Controller/AttendanceData.Controller.js';
import { takeAttendance } from '../Controller/TakeAttendance.Controller.js';
import getSubjectList from '../Controller/GetSubjectList.Controller.js';
import getAttendance_From_Subject from '../Controller/GetSubjectAttendance.Controller.js';
import getMonthlyAttendance from '../Controller/MonthlyAttendance.Controller.js';
import addQuery from '../Controller/AddQuery.Controller.js';
const attendanceRouter = express.Router();

attendanceRouter.get('/attendanceData' , getAttendanceData)

attendanceRouter.post('/takeAttendance' , takeAttendance )

attendanceRouter.get('/subjectlist' , getSubjectList)


attendanceRouter.get('/:subject/:roll_no' , getAttendance_From_Subject)

attendanceRouter.get('/getMonthlyAttendace' , getMonthlyAttendance)

attendanceRouter.post('/query' , addQuery);


export default attendanceRouter;