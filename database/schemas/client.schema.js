const { Schema } = require('mongoose');
const { Photo } = require('../type');
const clientSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    photos: [
      {
        type: Photo,
      },
    ],
  },
  { timestamps: true }
);

module.exports = clientSchema;
