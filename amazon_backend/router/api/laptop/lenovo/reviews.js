const router = require("express").Router();
const Lenovo = require("../../../../models/computers/lenovo/lenovo");
const Lenovo_Reviews = require("../../../../models/computers/lenovo/reviews");

router.get("/", (req, res) => {
  res.send("Iphone_Reviews");
});

router.post("/add", async (req, res) => {
  try {
    const lenovo_Reviews = new Lenovo_Reviews(req.body);
    const review_data = await lenovo_Reviews.save();
    const postData = await Lenovo.findByIdAndUpdate(
      { _id: review_data.lenovo },
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
