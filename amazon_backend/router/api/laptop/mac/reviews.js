const router = require("express").Router();
const Mac = require("../../../../models/computers/mac/mac");
const Mac_Reviews = require("../../../../models/computers/mac/reviews");

router.get("/", (req, res) => {
  res.send("mac_Reviews");
});

router.post("/add", async (req, res) => {
  try {
    const mac_Reviews = new Mac_Reviews(req.body);
    const review_data = await mac_Reviews.save();
    const postData = await Mac.findByIdAndUpdate(
      { _id: review_data.mac },
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
