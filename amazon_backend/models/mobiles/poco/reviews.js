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

    poco: {
      type: mongoose.Types.ObjectId,
      ref: "pocos",
    },
  },
  { timestamps: true }
);

const Poco_reviews = mongoose.model("poco_reviews", product);

module.exports = Poco_reviews;
