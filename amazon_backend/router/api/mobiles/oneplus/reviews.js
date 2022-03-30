const router = require("express").Router();
const Oneplus = require("../../../../models/mobiles/oneplus/oneplus");
const Oneplus_Reviews = require("../../../../models/mobiles/mi/reviews");

router.get("/", (req, res) => {
  res.send("Oneplus_Reviews");
});

router.post("/add", async (req, res) => {
  try {
    const oneplus_Reviews = new Oneplus_Reviews(req.body);
    const review_data = await oneplus_Reviews.save();
    const postData = await Oneplus.findByIdAndUpdate(
      { _id: review_data.oneplus },
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
