// const catcher = require('../../lib/utils/catcher');
// const _Error = require('../../lib/utils/_error');
// const Operator = require('../../database/models/operator.model');

// module.exports.create = catcher(async (req, res, next) => {
//   // * May be we need to add more data here
//   // arr.map();
//   const { name, phone, photo, license, email, covid } = req.body;

//   const operator = await Operator.create({
//     name,
//     phone,
//     photo,
//     license,
//     email,
//     covid,
//     client: req.ctx._id,
//   });

//   res.status(201).json({
//     status: 'success',
//     message: `Operator ${name} registered successfully`,
//     data: operator,
//   });
// });

// module.exports.remove = catcher(async (req, res, next) => {
//   const { id } = req.params;

//   const operator = await Operator.findOne({
//     _id: id,
//     client: req.ctx._id,
//   });

//   if (!operator) {
//     return next(new _Error('Operator not found', 404));
//   }

//   await operator.remove();

//   res.status(200).json({
//     status: 'success',
//     message: `Operator ${operator.name} removed successfully`,
//   });
// });

// module.exports.read = catcher(async (req, res) => {
//   const operators = await Operator.find({
//     client: req.ctx._id,
//   });

//   res.status(200).json({
//     status: 'success',
//     // data: operators,
//     message: `${operators.length} operators found`,
//   });
// });

// module.exports.readById = catcher(async (req, res, next) => {
//   const { id } = req.params;

//   const operator = await Operator.findOne({
//     _id: id,
//     client: req.ctx._id,
//   });

//   if (!operator) {
//     return next(new _Error('Operator not found', 404));
//   }

//   res.status(200).json({
//     status: 'success',
//     data: operator,
//     message: `Operator ${operator.name} found`,
//   });
// });
