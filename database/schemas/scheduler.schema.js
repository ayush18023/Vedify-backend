const { Schema } = require('mongoose');
const { Photo } = require('../type');
const medicineSchema = new Schema(
  {
    // date,time,bookStatus,bookedBy
  },
  { timestamps: true }
);

module.exports = medicineSchema;
