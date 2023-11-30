const jwt = require('jsonwebtoken')
const { Mahasiswa } = require('../models')

const JWTMiddleware = async (req, res, next) => {
    const token = req.get('token');

    if (!token) {
        return res.status(400).json({
            error: 'Token not provided.',
            provided: req.get('token'),
        })
    }
    
    let credential;
    try {
        credential = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(400).json({
                error: 'Token expired'
            })
        } else {
            return res.status(400).json({
                error: 'Error when decoding token.',
                message: error.message
            })
        }
    }
    
    req.mahasiswa = await Mahasiswa.findByPk(credential.sub);
    console.log(credential.sub)

    next();
}

module.exports = {
    JWTMiddleware,
}

