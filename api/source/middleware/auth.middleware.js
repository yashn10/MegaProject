const jwt = require('jsonwebtoken');
const { errorResponse } = require('../utils/responseHelpers');

const verifyToken = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return errorResponse(res, 401, "Access denied. No token provided.");
        }
        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return errorResponse(res, 401, "Invalid or expired token.");
    }
};

const requireAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        return errorResponse(res, 403, "Access denied. Admin privileges required.");
    }
};

module.exports = { verifyToken, requireAdmin };
