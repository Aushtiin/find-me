const Helper = require('./auth');
const {hashPassword, createToken} = Helper;
const ServerResponse = require('../utils/serverResponse');
const User = require('../models/user');
const { successResponse, errorResponse } = ServerResponse;
require('dotenv').config()

module.exports = class SignUserUp {
    static async signUp (req, res, email, password, ) {
        const foundUser = await User.findOne({ email });
        if (foundUser) return errorResponse(res, 400, { message: 'user already exists' });

        const hashedPassword = hashPassword(password);

        const user = {
            email,
            password: hashedPassword
        };

        const registeredUser = new User(user);
        await registeredUser.save();

        const { email: remail, id } = registeredUser;

        const Token = createToken({
            id,
            remail
        });

        return successResponse({
            res,
            status: 200,
            success: true,
            message: "Account created successfully",
            data: Token
        });
    }
}