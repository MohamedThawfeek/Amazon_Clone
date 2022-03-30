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

    fridge: {
      type: mongoose.Types.ObjectId,
      ref: "fridge",
    },
  },
  { timestamps: true }
);

const Fridge_reviews = mongoose.model("fridge_reviews", product);

module.exports = Fridge_reviews;
