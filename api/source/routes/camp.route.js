const express = require('express');
const router = express.Router();
const campController = require('../controllers/camps.controllers');

router.get('/camps', campController.getAllCamps);
router.get('/camps/:id', campController.getCampById);
router.post('/camps', campController.createCamp);
router.put('/camps/:id', campController.updateCamp);
router.delete('/camps/:id', campController.deleteCamp);

module.exports = router;