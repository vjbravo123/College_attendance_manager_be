import express from 'express';
import { changeQueriedAttendance, getAttendanceOfQuery } from '../Controller/GetAllQuery.Controller.js';

const queryRouter = express.Router();

queryRouter.get('/queryReview/:studentId/:subject' , getAttendanceOfQuery)

queryRouter.put('/changeAttendance/:AttendanceID' , changeQueriedAttendance)
export default queryRouter;