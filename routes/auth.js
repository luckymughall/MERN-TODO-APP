const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

//Sign UP

router.post("/register", async (req, res) => {
    try {
        const { email, username, password } = req.body;
        
        // Check if any of the required fields are blank
        if (!email || !username || !password) {
            return res.status(200).json({ message: "Please provide all required fields." });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(200).json({ message: "User already exists." });
        }

        // Hash the password
        const hashpassword = bcrypt.hashSync(password);

        // Create a new user
        const newUser = new User({ email, username, password: hashpassword });
        await newUser.save();
        res.status(200).json({ message: "Sign up successful." });
    } catch (error) {
        res.status(200).json({ message: "Internal Server Error" });
    }
});


//Sign in
router.post("/login" , async (req,res) => {
    try {
        if (!req.body.email || !req.body.password) {
            return res.status(200).json({message: "Please provide both email and password"});
        }

        const user = await User.findOne({email: req.body.email});
        if(!user) {
            return res.status(200).json({message: "Email not found. Please Sign Up First"});
        }

        const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);
        if(!isPasswordCorrect) {
            return res.status(200).json({message: "Password is incorrect"});
        }

        const {password, ...others} = user._doc;
        res.status(200).json({others});
    } catch (error) {
        res.status(200).json({message: error.message});
    }
});


module.exports = router;