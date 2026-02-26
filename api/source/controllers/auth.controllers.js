const User = require('../models/user');
const { errorResponse, successResponse } = require('../utils/responseHelpers');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const maxAge = 3 * 24 * 60 * 60;


const register = async (req, res) => {
    try {
        const passwordHash = await bcrypt.hash(req.body.password, 10);
        const user = new User({ ...req.body, password: passwordHash });
        await user.save();
        return successResponse(res, 201, "User registered successfully", { userId: user._id, email: user.email });
    } catch (error) {
        console.log("Server Error", error);
        return errorResponse(res, 500, "Server Error");
    }
}


const login = async (req, res) => {
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
        const token = jwt.sign(
            { userId: user._id, email: user.email, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: maxAge }
        );
        return successResponse(res, 200, "Login Successful", {
            token,
            user: {
                _id: user._id,
                fullname: user.fullname,
                username: user.username,
                email: user.email,
                role: user.role,
                bloodgroup: user.bloodgroup,
                phone: user.phone,
                age: user.age,
                gender: user.gender
            }
        });
    } catch (error) {
        console.log("Server Error", error);
        return errorResponse(res, 500, "Server Error");
    }
}


const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user.userId).select('-password');
        if (!user) {
            return errorResponse(res, 404, "User not found");
        }
        return successResponse(res, 200, "User retrieved successfully", user);
    } catch (error) {
        console.log("Server Error", error);
        return errorResponse(res, 500, "Server Error");
    }
}


const logout = (req, res) => {
    return successResponse(res, 200, "Logout Successful", null);
}


module.exports = { register, login, logout, getMe };