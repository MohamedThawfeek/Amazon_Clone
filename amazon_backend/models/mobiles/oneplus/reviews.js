const mongoose = require("mongoose");

const product = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    messages: {
      type: String,
      required: true,
    },

    onePlus: {
      type: mongoose.Types.ObjectId,
      ref: "onePlus",
    },
  },
  { timestamps: true }
);

const OnePlus_reviews = mongoose.model("onePlus_reviews", product);

module.exports = OnePlus_reviews;
