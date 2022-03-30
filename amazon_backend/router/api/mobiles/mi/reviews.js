const router = require("express").Router();
const Mi = require("../../../../models/mobiles/mi/mi");
const Mi_Reviews = require("../../../../models/mobiles/mi/reviews");

router.get("/", (req, res) => {
  res.send("Iphone_Reviews");
});

router.post("/add", async (req, res) => {
  try {
    const mi_Reviews = new Mi_Reviews(req.body);
    const review_data = await mi_Reviews.save();
    const postData = await Mi.findByIdAndUpdate(
      { _id: review_data.mi },
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
