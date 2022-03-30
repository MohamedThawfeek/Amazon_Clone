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

    washing: {
      type: mongoose.Types.ObjectId,
      ref: "washing_machine",
    },
  },
  { timestamps: true }
);

const Washing_machines_reviews = mongoose.model(
  "washingMachines_reviews",
  product
);

module.exports = Washing_machines_reviews;
