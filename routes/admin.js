const express = require('express');
const User = require('../models/users')
const authMiddleware = require('../middleware/authMiddleware')

const router = express.Router();

//Get all data
router.get('/', authMiddleware, async (req, res) => {
    User.find().then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({ message: "something went wrong" }))
})

//get specific user data
router.get('/:id', authMiddleware, async (req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findById(id);

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "something went wrong" })
    }
})

//modify all details
router.put('/:id', authMiddleware, async (req, res) => {
    try {
        const id = req.params.id;
        const { name, email, phone, password, role, profileImage } = req.body

        const updatedData = await User.findByIdAndUpdate(id, { name, email, phone, password, role, profileImage }, { new: true })
        if (!updatedData) {
            return res.status(400).message({ message: "No user found" })
        }
        res.status(200).json(updatedData)
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "something went wrong" })
    }
})


//Delete
router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        const id = req.params.id
        const deletedUser = await User.findByIdAndDelete(id)
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted" })
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "something went wrong" })
    }
})






module.exports = router;