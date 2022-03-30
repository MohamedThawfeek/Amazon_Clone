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

    ac: {
      type: mongoose.Types.ObjectId,
      ref: "ac",
    },
  },
  { timestamps: true }
);

const Ac_reviews = mongoose.model("ac_reviews", product);

module.exports = Ac_reviews;
