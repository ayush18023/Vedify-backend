const cron = require('node-cron');
const catcher = require('../../lib/utils/catcher');
const { create } = require('./schedule.controller');

module.exports.dailyRun = catcher(async (req, res, next) => {
  cron.schedule('0 0 * * *', () => {
    create('12:20');
  });
});
