const router = require("express").Router();
const Poco = require("../../../../models/mobiles/poco/poco");
const Poco_Reviews = require("../../../../models/mobiles/poco/reviews");

router.get("/", (req, res) => {
  res.send("Oneplus_Reviews");
});

router.post("/add", async (req, res) => {
  try {
    const poco_Reviews = new Poco_Reviews(req.body);
    const review_data = await poco_Reviews.save();
    const postData = await Poco.findByIdAndUpdate(
      { _id: review_data.poco },
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
