const express = require('express');
const router = express.Router();
const { createOrder, getMyOrders } = require('../controllers/order.controllers');
const { verifyToken } = require('../middleware/auth.middleware');

router.post('/', verifyToken, createOrder);
router.get('/my', verifyToken, getMyOrders);

module.exports = router;
