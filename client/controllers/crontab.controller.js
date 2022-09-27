const cron = require('node-cron');
const catcher = require('../../lib/utils/catcher');
const { createAutomatic } = require('./schedule.controller');

module.exports.dailyRun = catcher(async (req, res, next) => {
  cron.schedule('0 0 * * *', () => {
    createAutomatic();
  });
});
