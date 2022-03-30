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

    samsung: {
      type: mongoose.Types.ObjectId,
      ref: "samsungs",
    },
  },
  { timestamps: true }
);

const Samsung_reviews = mongoose.model("samsung_reviews", product);

module.exports = Samsung_reviews;
