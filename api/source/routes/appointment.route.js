const express = require('express');
const router = express.Router();
const { createAppointment, getMyAppointments } = require('../controllers/appointment.controllers');
const { verifyToken } = require('../middleware/auth.middleware');

router.post('/', verifyToken, createAppointment);
router.get('/my', verifyToken, getMyAppointments);

module.exports = router;
