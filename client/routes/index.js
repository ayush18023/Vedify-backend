const express = require('express');

const operatorRouter = require('./operator.routes');
const authRouter = require('./authentication.routes');
const vehicleRouter = require('./vehicle.routes');

const router = express.Router();

router.use('/auth', authRouter);
// router.use('/operator', operatorRouter);
// router.use('/vehicle', vehicleRouter);

module.exports = router;
