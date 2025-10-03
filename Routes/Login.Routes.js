import express from 'express';
import { studentSignup, studentsLogin, teacherLogin, teacherSignup } from '../Controller/Auth.Controller.js';
const loginRouter = express.Router();

loginRouter.post('/teacherLogin', teacherLogin)
loginRouter.post('/studentLogin', studentsLogin)


loginRouter.post('/teacherSignup' ,teacherSignup)
loginRouter.post('/studentSignup' ,studentSignup)


export default loginRouter;