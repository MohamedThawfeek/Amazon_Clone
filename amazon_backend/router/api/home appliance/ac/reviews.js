const router = require("express").Router();
const AC = require("../../../../models/homeAppliance/ac/ac");
const AC_Reviews = require("../../../../models/homeAppliance/ac/reviews");

router.get("/", (req, res) => {
  res.send("dell_Reviews");
});

router.post("/add", async (req, res) => {
  try {
    const ac_Reviews = new AC_Reviews(req.body);
    const review_data = await ac_Reviews.save();
    const postData = await AC.findByIdAndUpdate(
      { _id: review_data.ac },
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
