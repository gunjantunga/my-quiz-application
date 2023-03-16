import User from "../schma/user-schema.js";

export const registerUser = async (req, res) => {
    const { username, password, email, phone } = req.body;

    try {
        const user = await User.findOne({ email });
        if (user) {
            res.status(409).json({ error: 'Email already exists' });
        } else {
            const newUser = new User({ username, email, password, phone });
            await newUser.save();
            res.json({ success: true });
        }
    } catch (err) {
        res.status(409).json({ "message": error.message })
    }

}

export const loginUser = async (req, res) => {
    const { email, password } = req.body
    try {
        let user = await User.findOne({ email });
        if (user) {
            if (user.password === password) {
                res.json({ success: "Login Successfully" });
            } else {
                res.status(401).json({ error: `Password did't matched` });
            }
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (err) {
        res.status(409).json({ "message": err.message })
    }
}















// client.connect(err => {
//     try {
//         const db = client.db('mydatabase');
//         const quizResponses = db.collection('quizResponses');
//         // Endpoint to handle quiz submissions
//         app.post('/quiz/submit', (req, res) => {
//             const { userId, quizId, responses } = req.body;
//             quizResponses.insertOne({ userId, quizId, responses }, (err, result) => {
//                 if (err) {
//                     res.status(500).json({ error: 'Internal server error' });
//                 } else {
//                     res.json({ success: true });
//                 }
//             });
//         });
//     } catch (err) {
//         console.log('Error while connect to database', err);
//     }
// });


// Middleware for session management
// app.use(session({
//     secret: 'my-secret-key',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false } // set this to true if using https
// }));

// Middleware to check if user is authenticated
// const requireAuth = (req, res, next) => {
//     if (req.session && req.session.authenticated) {
//         next();
//     } else {
//         res.status(401).json({ error: 'Unauthorized' });
//     }
// };




// Endpoint to authenticate user
// app.post('/authenticate', (req, res) => {
//     const { username, password } = req.body;
//     const users = db.collection('users');
//     users.findOne({ username, password }, (err, user) => {
//         if (user) {
//             req.session.authenticated = true;
//             res.json({ success: true });
//         } else {
//             res.status(401).json({ error: 'Invalid credentials' });
//         }
//     });
// });

// Endpoint to create a new quiz
// app.post('/quizzes', (req, res) => {
//     const { title, questions } = req.body;
//     quizzes.insertOne({ title, questions }, (err, result) => {
//         if (err) {
//             res.status(500).json({ error: 'Internal server error' });
//         } else {
//             res.json({ success: true });
//         }
//     });
// });

// Endpoint to get all quizzes
// app.get('/quizzes', (req, res) => {
//     quizzes.find({}).toArray((err, quizzes) => {
//         if (err) {
//             res.status(500).json({ error: 'Internal server error' });
//         } else {
//             res.json(quizzes);
//         }
//     });
// });

// Endpoint to get a specific quiz by ID
// app.get('/quizzes/:id', (req, res) => {
//     const quizId = req.params.id;
//     quizzes.findOne({ _id: quizId }, (err, quiz) => {
//         if (err) {
//             res.status(500).json({ error: 'Internal server error' });
//         } else if (!quiz) {
//             res.status(404).json({ error: 'Quiz not found' });
//         } else {
//             res.json(quiz);
//         }
//     });
// });
