const { Schema } = require('mongoose');
const { validPhotoURL } = require('../../lib/utils/validators');

const PhotoSchema = new Schema({
  url: {
    type: String,
    validate(value) {
      validPhotoURL(value);
    },
  },
  date: { type: Date },
});

module.exports = PhotoSchema;
