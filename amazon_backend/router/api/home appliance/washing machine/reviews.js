const router = require("express").Router();
const Washing_Machines = require("../../../../models/homeAppliance/washing machines/washing_machines");
const Washing_Machines_Reviews = require("../../../../models/homeAppliance/washing machines/reviews");

router.get("/", (req, res) => {
  res.send("dell_Reviews");
});

router.post("/add", async (req, res) => {
  try {
    const washing_machines_Reviews = new Washing_Machines_Reviews(req.body);
    const review_data = await washing_machines_Reviews.save();
    const postData = await Washing_Machines.findByIdAndUpdate(
      { _id: review_data.washing },
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
