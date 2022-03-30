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

    fan: {
      type: mongoose.Types.ObjectId,
      ref: "fan",
    },
  },
  { timestamps: true }
);

const Fan_reviews = mongoose.model("fan_reviews", product);

module.exports = Fan_reviews;
