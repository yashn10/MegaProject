const User = require('../models/user');
const errorResponse = require('../utils/responseHelpers');
const successResponse = require('../utils/responseHelpers');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const maxAge = 3 * 24 * 60 * 60;


export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const passwordHash = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: passwordHash });
        await user.save();
        return successResponse(res, 201, "User registered successfully", { userId: user._id, email: user.email });
    } catch (error) {
        console.log("Server Error", error);
        return errorResponse(res, 500, "Server Error");
    }
}


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return errorResponse(res, 404, "User not found");
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return errorResponse(res, 401, "Invalid Credentials");
        }
        const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: maxAge });
        const cookieOptions = {
            httpOnly: true,
            maxAge: maxAge * 1000
        };
        res.cookie('blood bank token', token, cookieOptions);
        if (token) {
            return successResponse(res, 200, "Login Successfull", { token });
        }
    } catch (error) {
        console.log("Server Error", error);
        return errorResponse(res, 500, "Server Error");
    }
}


export const logout = (req, res) => {
    res.clearCookie('blood bank token');
    return successResponse(res, 200, "Logout Successfull", null);
}