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

    dell: {
      type: mongoose.Types.ObjectId,
      ref: "dell",
    },
  },
  { timestamps: true }
);

const Dell_reviews = mongoose.model("dell_reviews", product);

module.exports = Dell_reviews;
