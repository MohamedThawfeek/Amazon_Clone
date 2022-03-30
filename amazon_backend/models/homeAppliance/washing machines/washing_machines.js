const mongoose = require("mongoose");

const product = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    images: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    reviews: [
      {
        type: mongoose.Types.ObjectId,
        ref: "washingMachines_reviews",
      },
    ],
  },
  { timestamps: true }
);

const Washing_machine = mongoose.model("washing_machine", product);

module.exports = Washing_machine;
