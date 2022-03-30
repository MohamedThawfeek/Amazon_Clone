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

    tv: {
      type: mongoose.Types.ObjectId,
      ref: "tv",
    },
  },
  { timestamps: true }
);

const Tv_reviews = mongoose.model("tv_reviews", product);

module.exports = Tv_reviews;
