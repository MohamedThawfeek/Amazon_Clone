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

    iphone: {
      type: mongoose.Types.ObjectId,
      ref: "iphones",
    },
  },
  { timestamps: true }
);

const Iphone_reviews = mongoose.model("iphone_reviews", product);

module.exports = Iphone_reviews;
