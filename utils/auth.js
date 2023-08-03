const jwt = require("jsonwebtoken")
require('dotenv').config();


const auth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) {
        return res.status(401).json({ success: false, message: 'Missing access token' });
    }

    jwt.verify(token, process.env.SECRET, (err, decodedToken) => {
        if (err) {
            return res.status(401).json({ success: false, message: 'Invalid access token'});
        }
        req.decodedToken = decodedToken;

        next();
    });
};

module.exports = { auth }