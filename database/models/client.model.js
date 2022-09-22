const { model } = require('mongoose');
const clientSchema = require('../schemas/medicines.schema');

const clientModel = model('client', clientSchema);

module.exports = clientModel;
