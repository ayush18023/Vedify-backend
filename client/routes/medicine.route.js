const express = require('express');
const {
  verify,
  dummy_verify,
  isAdmin,
} = require('../controllers/authorization.controller');
const {
  create,
  remove,
  update,
  read,
  readById,
  disease,
  addReview,
} = require('../controllers/medicine.controller');

const router = express.Router();

router.route('/').get(read);
router.route('/:id').get(readById); // api/v1/medicine/634635687367

router.use(verify);
router.route('/addReview/:id').post(addReview);
router.use(isAdmin);
router.route('/:id').delete(remove).put(update); // api/v1/medicine/634635687367
router.route('/').post(create); // api/v1/medicine

module.exports = router;
