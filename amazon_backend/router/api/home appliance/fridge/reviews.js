const router = require("express").Router();
const Fridge = require("../../../../models/homeAppliance/fridge/fridge");
const Fridge_Reviews = require("../../../../models/homeAppliance/fridge/reviews");

router.get("/", (req, res) => {
  res.send("dell_Reviews");
});

router.post("/add", async (req, res) => {
  try {
    const fridge_Reviews = new Fridge_Reviews(req.body);
    const review_data = await fridge_Reviews.save();
    const postData = await Fridge.findByIdAndUpdate(
      { _id: review_data.fridge },
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
