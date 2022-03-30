const router = require("express").Router();
const Hp = require("../../../../models/computers/hp/hp");
const Hp_Reviews = require("../../../../models/computers/hp/reviews");

router.get("/", (req, res) => {
  res.send("Hp_Reviews");
});

router.post("/add", async (req, res) => {
  try {
    const hp_Reviews = new Hp_Reviews(req.body);
    const review_data = await hp_Reviews.save();
    const postData = await Hp.findByIdAndUpdate(
      { _id: review_data.hp },
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
