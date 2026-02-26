const express = require('express');
const router = express.Router();
const campController = require('../controllers/camps.controllers');
const { verifyToken, requireAdmin } = require('../middleware/auth.middleware');

router.get('/', campController.getAllCamps);
router.get('/:id', campController.getCampById);
router.post('/', verifyToken, requireAdmin, campController.createCamp);
router.put('/:id', verifyToken, requireAdmin, campController.updateCamp);
router.delete('/:id', verifyToken, requireAdmin, campController.deleteCamp);

module.exports = router;