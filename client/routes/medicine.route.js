const express = require('express');
const {
  verify,
  dummy_verify,
} = require('../controllers/authorization.controller');
const {
  create,
  remove,
  update,
  read,
  readById,
  disease,
} = require('../controllers/medicine.controller');

const router = express.Router();

router.route('/disease').get(disease);
router.route('/').get(read);
router.route('/:id').get(readById); // api/v1/medicine/634635687367

router.use(verify);
// router.use(dummy_verify);
router.route('/').post(create); // api/v1/medicine

router.route('/:id').delete(remove).put(update); // api/v1/medicine/634635687367

module.exports = router;
