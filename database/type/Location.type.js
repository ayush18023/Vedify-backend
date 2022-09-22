const { Schema } = require('mongoose');

const Location = new Schema({
  type: {
    type: String,
    default: 'Point',
    enum: ['Point'],
  },
  coordinates: [Number],
  address: String,
  place_id: String,
  name: String,
  alias: String,
});

module.exports = Location;
