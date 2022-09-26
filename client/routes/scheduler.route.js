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

router.use(verify);
router.use(isAdmin);
// router.use(dummy_verify);

router.route('/').post(create).get(read); // api/v1/schedule

router.route('/:id').delete(remove).get(readById).put(update); // api/v1/schedule/634635687367

module.exports = router;
