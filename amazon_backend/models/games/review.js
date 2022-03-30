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

    games: [
      {
        type: mongoose.Types.ObjectId,
        ref: "games",
      },
    ],
  },
  { timestamps: true }
);

const Games_reviews = mongoose.model("games_reviews", product);

module.exports = Games_reviews;
