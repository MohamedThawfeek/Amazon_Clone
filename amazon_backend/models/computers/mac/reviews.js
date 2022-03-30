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

    mac: {
      type: mongoose.Types.ObjectId,
      ref: "mac",
    },
  },
  { timestamps: true }
);

const Mac_reviews = mongoose.model("mac_reviews", product);

module.exports = Mac_reviews;
