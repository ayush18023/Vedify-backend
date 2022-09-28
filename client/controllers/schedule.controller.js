const catcher = require('../../lib/utils/catcher');
const Schedule = require('../../database/models/scheduler.model');
const _Error = require('../../lib/utils/_error');
const CRUD = require('../../lib/handlers/crud.handler');
const mongoose = require('mongoose');
const scheduler = new CRUD(Schedule, 'client');

module.exports.createAutomatic = catcher(async (req, res, next) => {
  const timings = [
    '10:00',
    '10:20',
    '10:40',
    '11:00',
    '11:20',
    '11:40',
    '12:00',
    '12:20',
    '12:40',
    '13:00',
    '19:00',
    '19:20',
    '19:40',
    '20:00',
    '20:20',
    '20:40',
    '21:00',
    '21:20',
    '21:40',
  ];
  timings.forEach((time) => {
    Schedule.create({ timeSlot: time });
  });
});

module.exports.create = catcher(async (req, res, next) => {
  const { timeSlot } = req.body;
  id = req.ctx._id;
  const response = await scheduler.create({ timeSlot }, id);
  res.status(201).json(response);
});

module.exports.read = catcher(async (req, res, next) => {
  const result = await scheduler.read(req.query);
  res.status(200).json({
    result,
  });
});

module.exports.readById = catcher(async (req, res, next) => {
  const { id } = req.params;

  const findSched = await Schedule.findOne({
    _id: id,
    [this.auth]: req.client._id,
  });

  if (!findSched) {
    return res.status(400).json({
      status: 'failure',
      message: 'Requested Schedule  does not exist!',
    });
  }

  res.status(201).json({
    status: 'success',
    message: `Schedule ${findSched._id} found`,
    data: findSched,
  });
});

module.exports.update = catcher(async (req, res, next) => {
  const { id } = req.params;
  const { isBooked, bookedBy, name, reason } = req.body;
  const updateData = {
    isBooked,
    bookedBy,
    name,
    reason,
  };
  const newSched = await Schedule.findOne({ _id: id });
  if (!newSched) {
    res.status(404).json({
      success: false,
      message: 'Schedule not found',
    });
  }
  await newSched.updateOne({ $set: updateData }, { omitUndefined: 1 });
  res.status(200).json({
    success: true,
    message: `Schedule ${newSched._id} updated successfully`,
  });
});

module.exports.remove = catcher(async (req, res, next) => {
  const { id } = req.params;

  const newSched = await Schedule.findOne({
    _id: id,
  });

  if (!newSched) {
    return next(new _Error('Schedule not found', 404));
  }

  await Schedule.deleteOne({ _id: id });

  res.status(200).json({
    status: 'success',
    message: `Schedule ${newSched._id} removed successfully`,
  });
});
