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
    review: [
      {
        client: {
          type: Schema.Types.ObjectId,
          ref: 'client',
        },
        user_name: String,
        experience: String,
        feedback: String,
        star: { type: Number, required: true },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    avg_rating: { type: Number, default: 4 },
    total_stars: {
      type: Number,
      default: 0,
    },
    totalReviews: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = medicineSchema;
