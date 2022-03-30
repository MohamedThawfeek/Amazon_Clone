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

    lenovo: {
      type: mongoose.Types.ObjectId,
      ref: "lenovo",
    },
  },
  { timestamps: true }
);

const Lenovo_reviews = mongoose.model("lenovo_reviews", product);

module.exports = Lenovo_reviews;
