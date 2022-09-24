const express = require('express');

// const operatorRouter = require('./operator.routes');
const authRouter = require('./authentication.routes');
// const vehicleRouter = require('./vehicle.routes');
const medicineRouter = require('./medicine.route.js');
const orderRouter = require('./order.route.js');

const router = express.Router();

router.use('/auth', authRouter);
router.use('/medicine', medicineRouter);
router.use('/order', orderRouter);
// router.use('/operator', operatorRouter);
// router.use('/vehicle', vehicleRouter);

module.exports = router;
