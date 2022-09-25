const { model } = require('mongoose');
const scheduleSchema = require('../schemas/scheduler.schema');

const scheduleModel = model('schedule', scheduleSchema);

module.exports = scheduleModel;
