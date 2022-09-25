const { Schema } = require('mongoose');
const { Photo } = require('../type');
const medicineSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    disease: [{ type: String, required: true }],
    ingredients: [{ type: String, required: true }],
  },
  { timestamps: true }
);

module.exports = medicineSchema;
