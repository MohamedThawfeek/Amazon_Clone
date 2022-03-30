const router = require("express").Router();
const Samsung = require("../../../../models/mobiles/samsung/samsung");
const Samsung_Reviews = require("../../../../models/mobiles/samsung/reviews");

router.get("/", (req, res) => {
  res.send("samsung_Reviews");
});

router.post("/add", async (req, res) => {
  try {
    const samsung_Reviews = new Samsung_Reviews(req.body);
    const review_data = await samsung_Reviews.save();
    const postData = await Samsung.findByIdAndUpdate(
      { _id: review_data.samsung },
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
