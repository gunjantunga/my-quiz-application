import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const quizSchema = mongoose.Schema({
    Question_Id:Number,
    Question_Text:String,
    Option_A:String,
    Option_B:String,
    Option_C:String,
    Option_D:String,
    Correct_Option:Number
})

const Quiz = mongoose.model('questions', quizSchema);
export default Quiz;

