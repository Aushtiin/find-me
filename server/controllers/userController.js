const { verifyPassword, createToken } = require('../helpers/auth');
const SignUserUp = require('../helpers/signUp');
const User = require('../models/user');
const { successResponse, errorResponse } = require('../utils/serverResponse');
const { signUp } = SignUserUp;

const userSignUp = async (req, res, next) => {
    try {
        const { email, password,  } = req.body; console.log('ha');
        await signUp(req, res, email, password, );
    } catch (error) {
        return next(error);
    }
}

const getUsers = async (req, res, next) => {
    try {
        const users = await User.find().sort("email");
        return successResponse({
            res,
            status: 200,
            success: true,
            message: "All users",
            data: users
        })
    } catch (error) {
        return next(error);
    }
}

const userLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return errorResponse(res, 404, { message: "user not found" });

        const validPassword = verifyPassword(password, user.password);
        if (!validPassword) return errorResponse(res, 400, { message: "invalid login credentials" });

        const token = createToken({
            id: user._id,
            email,
        })
        
        return successResponse({
            res,
            status: 200,
            sucess: true,
            message: "success",
            data: token
        })
    } catch (error) {
       return next(error); 
    }
}

module.exports = {
    userSignUp,
    getUsers,
    userLogin,
}