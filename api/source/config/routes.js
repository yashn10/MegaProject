const express = require('express');
const router = express.Router();
const authRoutes = require('../routes/auth.route');
const donorRoutes = require('../routes/donor.route');
const receiverRoutes = require('../routes/receiver.route');
const campRoutes = require('../routes/camp.route');
const contactRoutes = require('../routes/contact.route');


router.use('/auth', authRoutes);
router.use('/donors', donorRoutes);
router.use('/receivers', receiverRoutes);
router.use('/camps', campRoutes);
router.use('/contacts', contactRoutes);

module.exports = router;