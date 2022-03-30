const router = require("express").Router();
const Fan = require("../../../../models/homeAppliance/fan/fan");
const Fan_Reviews = require("../../../../models/homeAppliance/fan/reviews");

router.get("/", (req, res) => {
  res.send("dell_Reviews");
});

router.post("/add", async (req, res) => {
  try {
    const fan_Reviews = new Fan_Reviews(req.body);
    const review_data = await fan_Reviews.save();
    const postData = await Fan.findByIdAndUpdate(
      { _id: review_data.fan },
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
