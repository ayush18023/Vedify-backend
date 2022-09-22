const { model } = require('mongoose');
const medicineSchema = require('../schemas/medicines.schema');

const medicineModel = model('medicines', medicineSchema);

module.exports = medicineModel;
