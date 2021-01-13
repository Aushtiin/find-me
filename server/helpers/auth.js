const jwt = require('jsonwebtoken');
const { hashSync, compareSync } = require('bcryptjs');
const { config } = require('dotenv');

config();

class Helper {
    static createToken(payload){
        return jwt.sign(payload, process.env.SECRET, { expiresIn: '24d' });
    }

    static verifyToken(token){
        return jwt.verify(token, process.env.SECRET);
    }

    static hashPassword(password){
        return hashSync(password, 10);
    }

    static verifyPassword(password, hashPassword){
        return compareSync(password, hashPassword);
    }
}

module.exports = Helper;