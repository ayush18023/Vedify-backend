const express = require('express');
const {
  verify,
  dummy_verify,
  isAdmin,
} = require('../controllers/authorization.controller');
const {
  create,
  remove,
  read,
  readById,
  update,
} = require('../controllers/schedule.controller');

const router = express.Router();

router.route('/').get(read); // api/v1/schedule/
router.use(verify);
router.route('/:id').put(update); // api/v1/schedule/:id
router.use(isAdmin);
// router.use(dummy_verify);

router.route('/').post(create); // api/v1/schedule

router.route('/:id').delete(remove).get(readById); // api/v1/schedule/634635687367

module.exports = router;
