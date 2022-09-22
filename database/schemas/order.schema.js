const { Schema } = require('mongoose');
const { Photo } = require('../type');
const orderSchema = new Schema(
  {
    orderPlacer: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'client',
    },
    medicines: [
      {
        medicineRequired: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'medicines',
        },
        quantity: {
          type: Number,
          required: true,
          default: 1,
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
    payMethod: {
      type: String,
      required: true,
    },
    paymentStatus: {
      type: Boolean,
      default: false,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

orderSchema.path('medicines').validate(function (medicines) {
  if (!medicines) {
    return false;
  } else if (medicines.length === 0) {
    return false;
  }
  return true;
}, 'Minimum One medicine required to Order');

module.exports = orderSchema;
