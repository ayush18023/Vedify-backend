const { Schema } = require('mongoose');
const { Photo } = require('../type');
const medicineSchema = new Schema(
  {
    name: {
      type: string,
      required: true,
    },
    prices: {
      type: Number,
      required: true,
    },
    photo: {
      type: Photo,
      required: true,
    },
    description: {
      type: true,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = medicineSchema;
