const express = require("express");
const User = require('../models/users');
const upload = require('../middleware/multerMiddleware')
const authMiddleware = require('../middleware/authMiddleware')

const router = express.Router();

// router.get('/:filename', (req, res) => {
//     const filePath = path.join(__dirname, 'uploads', req.params.filename);
//     res.sendFile(filePath);
// });

// router.post('/', authMiddleware, upload.single("image"), (req, res) => {
//     res.send("image uploaded")
// })

module.exports = router;