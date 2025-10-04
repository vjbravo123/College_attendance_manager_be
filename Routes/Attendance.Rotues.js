import express from 'express';
import { getAttendanceData } from '../Controller/AttendanceData.Controller.js';
import { takeAttendance } from '../Controller/TakeAttendance.Controller.js';
import getSubjectList from '../Controller/GetSubjectList.Controller.js';
import getAttendance_From_Subject from '../Controller/GetSubjectAttendance.Controller.js';
import getMonthlyAttendance from '../Controller/MonthlyAttendance.Controller.js';
import addQuery from '../Controller/AddQuery.Controller.js';
import {getAllQueries , deleteQuery} from '../Controller/GetAllQuery.Controller.js';
const attendanceRouter = express.Router();

attendanceRouter.get('/attendanceData' , getAttendanceData)

attendanceRouter.post('/takeAttendance' , takeAttendance )

attendanceRouter.get('/getMonthlyAttendace' , getMonthlyAttendance)





attendanceRouter.get('/subjectlist' , getSubjectList)






attendanceRouter.post('/query' , addQuery);

attendanceRouter.get('/getAllQueries/:sub' , getAllQueries);

attendanceRouter.delete('/deleteQuery/:id' , deleteQuery);

attendanceRouter.get('/:subject/:roll_no' , getAttendance_From_Subject)


export default attendanceRouter;