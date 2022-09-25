const catcher = require('../../lib/utils/catcher');
const Order = require('../../database/models/order.model.js');
const _Error = require('../../lib/utils/_error');
const CRUD = require('../../lib/handlers/crud.handler');
const mongoose = require('mongoose');

const order = new CRUD(Order, 'client');

module.exports.create = catcher(async (req, res, next) => {
  const { medicines, totalPrice, payMethod, paymentStatus, address } = req.body;
  id = req.ctx._id;
  console.log(id);
  const response = await order.create(
    { medicines, totalPrice, payMethod, paymentStatus, address },
    id
  );
  res.status(201).json(response);
});

module.exports.read = catcher(async (req, res, next) => {
  const result = await order.read(req.query, req.ctx._id);

  res.status(200).json({
    status: 'success',
    data: result,
  });
});

module.exports.remove = catcher(async (req, res, next) => {
  const { id } = req.params;

  const orders = await Order.findOne({
    _id: id,
    clientId: req.client._id,
  });

  if (!orders) {
    return next(new _Error('Order not found', 404));
  }

  await Order.remove(orders);

  res.status(200).json({
    status: 'success',
    message: `Order ${orders._id} removed successfully`,
  });
});

module.exports.readById = catcher(async (req, res, next) => {
  const { id } = req.params;

  const orders = await Order.findOne({
    _id: id,
    [this.auth]: req.client._id,
  });

  if (!orders) {
    return res.status(400).json({
      status: 'failure',
      message: 'Requested order does not exist!',
    });
  }

  res.status(201).json({
    status: 'success',
    message: `Order ${orders._id} found`,
    data: orders,
  });
});
