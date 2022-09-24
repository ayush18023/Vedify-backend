const express = require('express');
const {
  verify,
  dummy_verify,
} = require('../controllers/authorization.controller');
const {
  create,
  remove,
  read,
  readById,
} = require('../controllers/order.controller');

const router = express.Router();

router.use(verify);
// router.use(dummy_verify);

router.route('/').post(create).get(read); // api/v1/order

router.route('/:id').delete(remove).get(readById); // api/v1/order/634635687367

module.exports = router;
