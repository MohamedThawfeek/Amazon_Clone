const router = require("express").Router();
const Iphone = require("../../../../models/mobiles/iphone/iphone");
const Iphone_Reviews = require("../../../../models/mobiles/iphone/reviews");

router.get("/", (req, res) => {
  res.send("Iphone_Reviews");
});

router.post("/add", async (req, res) => {
  try {
    const iphone_Reviews = new Iphone_Reviews(req.body);
    const review_data = await iphone_Reviews.save();
    const postData = await Iphone.findByIdAndUpdate(
      { _id: review_data.iphone },
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

router.get("/all", async (req, res) => {
  try {
    const iphone_Reviews = await Iphone_Reviews.find({}).select(
      "-createdAt -updatedAt -password -__v"
    );

    res.json({ success: true, iphone_Reviews });
  } catch (error) {
    res.json({ msg: error.message });
  }
});

// router.get("/lowprice", async (req, res) => {
//   try {
//     const softwares = await Softwares.find({ price: { $gte: 100 } })
//       .select("-createdAt -updatedAt -password -__v")
//       .sort({ price: "asc" });

//     res.json({ success: true, softwares });
//   } catch (error) {
//     res.json({ msg: error.message });
//   }
// });

// router.get("/highestprice", async (req, res) => {
//   try {
//     const softwares = await Softwares.find({ price: { $gte: 300 } })
//       .select("-createdAt -updatedAt -password -__v")
//       .sort({ price: "asc" });

//     res.json({ success: true, softwares });
//   } catch (error) {
//     res.json({ msg: error.message });
//   }
// });

module.exports = router;
