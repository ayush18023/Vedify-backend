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
      // required: true,
    },
    email: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      defalut: false,
    },
    photos: [
      {
        type: Photo,
      },
    ],
    uid: { type: String },
  },
  { timestamps: true }
);

module.exports = clientSchema;
