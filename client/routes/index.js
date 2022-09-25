const express = require('express');

const authRouter = require('./authentication.routes.js');
const medicineRouter = require('./medicine.route.js');
const orderRouter = require('./order.route.js');
const scheduleRouter = require('./scheduler.route.js');

const router = express.Router();

router.use('/auth', authRouter);
router.use('/medicine', medicineRouter);
router.use('/order', orderRouter);
router.use('/schedule', scheduleRouter);

module.exports = router;
