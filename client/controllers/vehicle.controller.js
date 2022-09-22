// const catcher = require('../../lib/utils/catcher');
// const Vehicle = require('../../database/models/vehicle.model');
// const _Error = require('../../lib/utils/_error');
// const CRUD = require('../../lib/handlers/crud.handler');
// const mongoose = require('mongoose');

// const vehicle = new CRUD(Vehicle, 'client');

// module.exports.create = catcher(async (req, res, next) => {
//   const { number, capacity, RCNumber } = req.body;
//   id = req.ctx._id;
//   const response = await vehicle.create({ number, capacity, RCNumber }, id);
//   res.status(201).json(response);
// });

// module.exports.read = catcher(async (req, res, next) => {
//   // const res = await vehicle.read(req.query);

//   res.status(200).json({
//     status: 'success',
//   });
// });

// // module.exports.read = catcher(async (req, res, next) => {
// //   const vehicles = await Vehicle.find({ clientId: req.client._id });

// //   if (!vehicles) {
// //     res.status(200).json({
// //       status: 'success',
// //       message: `You do not have any registered vehicles . `,
// //     });
// //   }

// //   res.status(200).json({
// //     status: 'success',
// //     message: `You have ${vehicles.length} registered vehicles . `,
// //     data: vehicles,
// //   });
// // });

// module.exports.readById = catcher(async (req, res, next) => {
//   const { id } = req.params;

//   const vehicle = await Vehicle.findOne({
//     _id: id,
//     [this.auth]: req.client._id,
//   });

//   if (!vehicle) {
//     return res.status(400).json({
//       status: 'failure',
//       message: 'Requested vehicle does not exist!',
//     });
//   }

//   res.status(201).json({
//     status: 'success',
//     message: `Vehicle ${vehicle._id} found`,
//     data: vehicle,
//   });
// });

// module.exports.remove = catcher(async (req, res, next) => {
//   const { id } = req.params;

//   const vehicle = await Vehicle.findOne({ _id: id, clientId: req.client._id });

//   if (!vehicle) {
//     return next(new _Error('Vehicle not found', 404));
//   }

//   await vehicle.remove();

//   res.status(200).json({
//     status: 'success',
//     message: `Vehicle ${vehicle._id} removed successfully`,
//   });
// });
