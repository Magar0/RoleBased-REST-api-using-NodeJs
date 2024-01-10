const express = require("express");
const User = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const dotEnv = require('dotenv')

dotEnv.config()
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { phone, email, password } = req.body;
        //validation
        if (!email && !phone) {
            return res.status(400).json({ message: "Provide phone or email" })
        }
        if (!password) {
            return res.status(400).json({ message: "Password required" })
        }

        const user = await User.findOne({ $or: [{ email }, { phone }] });
        if (!user) {
            return res.status(400).json({ message: "User doesn't exist" });
        }
        //Password check
        const isPasswordCrt = await bcrypt.compare(password, user.password)
        if (!isPasswordCrt) {
            return res.status(400).json({ message: "Wrong password" })
        }

        const token = jwt.sign({ userId: user._id, role: user.role }, process.env.SECRET_KEY, { expiresIn: '1h' })
        res.status(200).json({ result: user, token })
    }
    catch (err) {
        res.status(500).json({ Error: err.message })
    }
})

module.exports = router;
