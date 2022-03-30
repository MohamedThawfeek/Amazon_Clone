const router = require("express").Router();
const Games = require("../../../../models/games/games");
const Games_Reviews = require("../../../../models/games/review");

router.get("/", (req, res) => {
  res.send("Iphone_Reviews");
});

router.post("/add", async (req, res) => {
  try {
    const games_Reviews = new Games_Reviews(req.body);
    const review_data = await games_Reviews.save();
    const postData = await Games.findByIdAndUpdate(
      { _id: review_data.games },
      {
        $push: { reviews: review_data._id },
      },
      {
        new: true,
      }
    );

    res.json({ success: true, reviews: review_data, comments: postData });
  } catch (error) {
    res.json({
      msg: error.message,
    });
  }
});

module.exports = router;
