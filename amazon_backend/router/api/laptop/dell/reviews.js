const router = require("express").Router();
const Dell = require("../../../../models/computers/dell/dell");
const Dell_Reviews = require("../../../../models/computers/dell/reviews");

router.get("/", (req, res) => {
  res.send("dell_Reviews");
});

router.post("/add", async (req, res) => {
  try {
    const dell_Reviews = new Dell_Reviews(req.body);
    const review_data = await dell_Reviews.save();
    const postData = await Dell.findByIdAndUpdate(
      { _id: review_data.dell },
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
