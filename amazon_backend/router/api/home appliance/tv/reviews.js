const router = require("express").Router();
const TV = require("../../../../models/homeAppliance/tv/tv");
const TV_Reviews = require("../../../../models/homeAppliance/tv/reviews");

router.get("/", (req, res) => {
  res.send("dell_Reviews");
});

router.post("/add", async (req, res) => {
  try {
    const tv_Reviews = new TV_Reviews(req.body);
    const review_data = await tv_Reviews.save();
    const postData = await TV.findByIdAndUpdate(
      { _id: review_data.tv },
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
