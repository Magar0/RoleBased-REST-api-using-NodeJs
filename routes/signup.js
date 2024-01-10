const express = require("express");
const User = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const dotEnv = require('dotenv')

dotEnv.config()
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { name, phone, email, password, role, profileImage } = req.body;
        //validation
        if (!email && !phone) {
            return res.status(400).json({ message: "At least one of the phone number or email is required" })
        }
        if (!name) {
            return res.status(400).json({ message: "Please provide a name" })
        }
        if (!password) {
            return res.status(400).json({ message: "Password required" })
        }
        //checking if user is already registered
        let existingUser;
        if ((email && !phone) || (!email && phone)) {
            existingUser = await User.findOne({ email, phone })
        } else if (email && phone) {
            existingUser = await User.findOne({ $or: [{ email }, { phone }] })
        }


        // const existingUser = await User.findOne({ email, phone })
        if (existingUser) {
            return res.status(400).json({ message: "User already existed" })
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ name, email, phone, password: hashedPassword, role, profileImage })
        const token = jwt.sign({ userId: newUser._id, role: newUser.role }, process.env.SECRET_KEY, { expiresIn: '1h' })

        res.status(201).json({ result: newUser, token })
    }
    catch (err) {
        res.status(500).json({ Error: err.message })
    }
})

module.exports = router;

