const express = require('express');
const router = express.Router();
const { getStats } = require('../controllers/dashboard.controllers');
const { verifyToken } = require('../middleware/auth.middleware');

router.get('/stats', verifyToken, getStats);

module.exports = router;
