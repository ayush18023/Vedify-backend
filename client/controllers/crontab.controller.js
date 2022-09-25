const cron = require('node-cron');
const catcher = require('../../lib/utils/catcher');

module.exports.dailyRun = catcher(async (req, res, next) => {
  cron.schedule('* * * * *', () => {
    var d = new Date();
    d.setDate(d.getDate() + 10);
    console.log(d.toString());

    console.log(d.getDay);
  });
});
