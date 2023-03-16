import Quiz from "../schma/quiz-schema.js";

export const getAllQuestions = async (req,res) => {
    try {
        let questions = await Quiz.find({});
        res.status(200).json(questions);

    } catch (error) {
        res.status(409).json({ "message": error.message })
    }
}