const express = require('express');
const router = express.Router();
const campController = require('../controllers/camps.controllers');
const { verifyToken, requireAdmin } = require('../middleware/auth.middleware');

router.get('/camps', campController.getAllCamps);
router.get('/camps/:id', campController.getCampById);
router.post('/camps', verifyToken, requireAdmin, campController.createCamp);
router.put('/camps/:id', verifyToken, requireAdmin, campController.updateCamp);
router.delete('/camps/:id', verifyToken, requireAdmin, campController.deleteCamp);

module.exports = router;