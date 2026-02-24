const express = require('express');
const router = express.Router();
const receiverController = require('../controllers/receiver.controllers');

router.post('/register', receiverController.createReceiver);
router.get('/', receiverController.getAllReceivers);
router.get('/:id', receiverController.getReceiverById);
router.put('/:id', receiverController.updateReceiver);
router.delete('/:id', receiverController.deleteReceiver);

module.exports = router;