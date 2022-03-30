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

    realme: {
      type: mongoose.Types.ObjectId,
      ref: "realmes",
    },
  },
  { timestamps: true }
);

const Realme_reviews = mongoose.model("realme_reviews", product);

module.exports = Realme_reviews;
