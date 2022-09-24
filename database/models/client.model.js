const { model } = require('mongoose');
const clientSchema = require('../schemas/client.schema.js');

const clientModel = model('client', clientSchema);

module.exports = clientModel;
