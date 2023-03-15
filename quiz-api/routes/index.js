import express from 'express';
import { registerUser, loginUser } from '../controller/user-controller.js';
import { getAllQuestions } from '../controller/questions-controller.js';
const Routes = express.Router();

Routes.post('/signup', registerUser);
Routes.post('/authenticate', loginUser);

//questions

Routes.get('/questions', getAllQuestions);
export default Routes;
