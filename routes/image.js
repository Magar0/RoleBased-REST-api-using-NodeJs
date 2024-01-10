const express = require("express");
const User = require('../models/users');
const upload = require('../middleware/multerMiddleware')

const router = express.Router();

router.get('/', (req, res) => {
    res.render("upload")
})

router.post('/', upload.single("image"), (req, res) => {
    res.send("image uploaded")
})

module.exports = router;