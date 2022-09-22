const { model } = require('mongoose');
const orderSchema = require('../schemas/order.schema');

const orderModel = model('order', orderSchema);

module.exports = orderModel;
