const { Schema } = require('mongoose');
const { Photo } = require('../type');

var d = new Date();
d.setDate(d.getDate() + 2);

const medicineSchema = new Schema(
  {
    date: {
      type: Number,
      default: d.getDate(),
    },
    day: {
      type: Number,
      default: d.getDay(),
    },
    month: {
      type: Number,
      default: d.getMonth(),
    },
    year: {
      type: Number,
      default: d.getFullYear(),
    },
    isBooked: {
      type: Boolean,
      default: false,
    },
    bookedBy: {
      type: Schema.Types.ObjectId,
      ref: 'Client',
    },
    timeSlot: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = medicineSchema;
