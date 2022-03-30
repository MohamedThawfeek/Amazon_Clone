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

    mi: {
      type: mongoose.Types.ObjectId,
      ref: "mis",
    },
  },
  { timestamps: true }
);

const Mi_reviews = mongoose.model("mi_reviews", product);

module.exports = Mi_reviews;
