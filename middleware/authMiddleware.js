const jwt = require('jsonwebtoken');
const { model } = require('mongoose');
const dotEnv = require('dotenv')

dotEnv.config()

function authMiddleware(req, res, next) {
    // const token = req.headers.authorization?.split(' ')[1]; //for token with bearer name
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: "Unauthorized" })
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err || !decoded.userId) {
            return res.status(401).json({ error: "Unauthorized" })
        }
        //role based authorization
        if (req.baseUrl.startsWith('/api/admin') && decoded.role !== 'admin') {
            return res.status(401).json({ error: "Unauthorized" })
        }

        req.userId = decoded.userId;
        next();

    })

}

module.exports = authMiddleware;


