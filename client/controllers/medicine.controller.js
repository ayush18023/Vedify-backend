const catcher = require('../../lib/utils/catcher');
const Medicine = require('../../database/models/medicines.model.js');
const _Error = require('../../lib/utils/_error');
const CRUD = require('../../lib/handlers/crud.handler');
const mongoose = require('mongoose');

const medicine = new CRUD(Medicine, 'client');

module.exports.create = catcher(async (req, res, next) => {
  const { name, price, photo, description } = req.body;
  id = req.ctx._id;
  const response = await medicine.create(
    { name, price, photo, description },
    id
  );
  res.status(201).json(response);
});

module.exports.read = catcher(async (req, res, next) => {
  const result = await Medicine.read(req.query);

  res.status(200).json({
    status: 'success',
    data: result,
  });
});

// module.exports.read = catcher(async (req, res, next) => {
//   const vehicles = await Vehicle.find({ clientId: req.client._id });

//   if (!vehicles) {
//     res.status(200).json({
//       status: 'success',
//       message: `You do not have any registered vehicles . `,
//     });
//   }

//   res.status(200).json({
//     status: 'success',
//     message: `You have ${vehicles.length} registered vehicles . `,
//     data: vehicles,
//   });
// });

module.exports.readById = catcher(async (req, res, next) => {
  const { id } = req.params;

  const medicine = await Medicine.findOne({
    _id: id,
    [this.auth]: req.client._id,
  });

  if (!medicine) {
    return res.status(400).json({
      status: 'failure',
      message: 'Requested medicine does not exist!',
    });
  }

  res.status(201).json({
    status: 'success',
    message: `Medicine ${medicine._id} found`,
    data: medicine,
  });
});

module.exports.remove = catcher(async (req, res, next) => {
  const { id } = req.params;

  const medicine = await Medicine.findOne({
    _id: id,
    clientId: req.client._id,
  });

  if (!medicine) {
    return next(new _Error('Medicine not found', 404));
  }

  await Medicine.remove();

  res.status(200).json({
    status: 'success',
    message: `Medicine ${medicine._id} removed successfully`,
  });
});
