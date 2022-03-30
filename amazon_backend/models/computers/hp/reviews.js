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

    hp: {
      type: mongoose.Types.ObjectId,
      ref: "hp",
    },
  },
  { timestamps: true }
);

const Hp_reviews = mongoose.model("hp_reviews", product);

module.exports = Hp_reviews;
