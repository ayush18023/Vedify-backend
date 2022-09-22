const express = require('express');
const { dummy_verify, verify } = require('../controllers/authorization.controller');
const { create, read, readById, remove } = require('../controllers/vehicle.controller');

const router = express.Router();

//  router.use(verify);
 router.use(dummy_verify);

router.route('/').post(create).get(read); // api/v1/vehicle

router.route('/:id').delete(remove).get(readById); // api/v1/vehicle/6346343687367

module.exports = router;
