const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controllers');
const { verifyToken } = require('../middleware/auth.middleware');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.get('/me', verifyToken, authController.getMe);

module.exports = router;