const express = require('express');
const User = require('../models/users')
const authMiddleware = require('../middleware/authMiddleware')

const router = express.Router();

router.get('/', authMiddleware, async (req, res) => {
    try {
        const userDetails = await User.findById(req.userId);
        if (!userDetails) {
            return res.status(400).json({ message: "No user found" })
        }
        res.status(200).json(userDetails)
    } catch (err) {
        console.log(err);
        res.status(500).json({ "Error": err.message })
    }
})


router.patch('/', authMiddleware, async (req, res) => {
    try {
        const { name, profileImage, password } = req.body;

        const updatedData = await User.findByIdAndUpdate(req.userId, { $set: { name, profileImage, password } }, { new: true })
        if (!updatedData) {
            return res.status(400).json({ message: "No user found" })
        }
        res.status(201).json(updatedData)
    } catch (err) {
        console.log(err);
        res.status(500).json({ "Error": err.message })
    }
})

router.delete('/', authMiddleware, async (req, res) => {
    try {
        const deletedData = await User.findByIdAndDelete(req.userId);
        if (!deletedData) {
            return res.status(400).json({ message: "No user found" });
        }
        res.status(200).json(deletedData);
    } catch (err) {
        console.log(err);
        res.status(500).json({ "Error": err.message })
    }
})

module.exports = router;