const catcher = require('../../lib/utils/catcher');
const Schedule = require('../../database/models/scheduler.model');
const _Error = require('../../lib/utils/_error');
const CRUD = require('../../lib/handlers/crud.handler');
const mongoose = require('mongoose');

module.exports.create = (time) => {
  catcher(async (req, res, next) => {
    console.log(time);
  });
};
