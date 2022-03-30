const router = require("express").Router();
const Realme = require("../../../../models/mobiles/realme/realme");
const Realme_Reviews = require("../../../../models/mobiles/realme/reviews");

router.get("/", (req, res) => {
  res.send("realme_Reviews");
});

router.post("/add", async (req, res) => {
  try {
    const realme_Reviews = new Realme_Reviews(req.body);
    const review_data = await realme_Reviews.save();
    const postData = await Realme.findByIdAndUpdate(
      { _id: review_data.realme },
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
