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
