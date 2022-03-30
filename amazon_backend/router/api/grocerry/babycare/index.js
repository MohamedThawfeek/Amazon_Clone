const router = require("express").Router();
const BabyCare = require("../../../../models/grocerry/baby care/babyCare");
const { authenticate, permit } = require("../../../../middleware");

router.get("/", (req, res) => {
  res.send("babycare");
});

router.post("/add", [authenticate, permit([1])], async (req, res) => {
  try {
    const baby_care = await BabyCare.create(req.body);
    res.json({ msg: "Success fully added product" });
  } catch (error) {
    res.json({
      msg: "Restricted Access",
    });
  }
});

router.get("/all", async (req, res) => {
  try {
    const product = await BabyCare.find({}).select(
      "-createdAt -updatedAt -password -__v"
    );

    res.json({ success: true, product });
  } catch (error) {
    res.json({ msg: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await BabyCare.find({ _id: req.params.id }).select(
      "-createdAt -updatedAt -password -__v"
    );

    res.json({ success: true, product });
  } catch (error) {
    res.json({ msg: error.message });
  }
});

// router.get("/lowprice", async (req, res) => {
//   try {
//     const baby_care = await BabyCare.find({})
//       .select("-createdAt -updatedAt -password -__v")
//       .sort({ price: 1 });

//     res.json({ success: true, baby_care });
//   } catch (error) {
//     res.json({ msg: error.message });
//   }
// });

// router.get("/highestprice", async (req, res) => {
//   try {
//     const baby_care = await BabyCare.find({})
//       .select("-createdAt -updatedAt -password -__v")
//       .sort({ price: -1 });

//     res.json({ success: true, baby_care });
//   } catch (error) {
//     res.json({ msg: error.message });
//   }
// });

router.put("/update/:id", [authenticate, permit([1])], async (req, res) => {
  try {
    const product = await BabyCare.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      {
        name: req.body.name,
        price: req.body.price,
        weight: req.body.weight,
      },
      { new: true }
    );
    res.json({ msg: "Success fully updated product" });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/delete/:id", [authenticate, permit([1])], async (req, res) => {
  try {
    const product = await BabyCare.findByIdAndDelete(
      {
        _id: req.params.id,
      },

      { new: true }
    );
    res.json({ msg: "Success fully deleted product" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
