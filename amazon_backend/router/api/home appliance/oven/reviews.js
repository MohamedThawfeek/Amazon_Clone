const router = require("express").Router();
const Oven = require("../../../../models/homeAppliance/oven/oven");
const Oven_Reviews = require("../../../../models/homeAppliance/oven/reviews");

router.get("/", (req, res) => {
  res.send("dell_Reviews");
});

router.post("/add", async (req, res) => {
  try {
    const oven_Reviews = new Oven_Reviews(req.body);
    const review_data = await oven_Reviews.save();
    const postData = await Oven.findByIdAndUpdate(
      { _id: review_data.oven },
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
