const mongoose = require("mongoose");

const product = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    messages: {
      type: String,
    },

    oven: {
      type: mongoose.Types.ObjectId,
      ref: "oven",
    },
  },
  { timestamps: true }
);

const Oven_reviews = mongoose.model("oven_reviews", product);

module.exports = Oven_reviews;
