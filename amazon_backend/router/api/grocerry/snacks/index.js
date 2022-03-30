const router = require("express").Router();
const Snacks = require("../../../../models/grocerry/snacks/snacks");
const { authenticate, permit } = require("../../../../middleware");

router.get("/", (req, res) => {
  res.send("Snacks");
});

router.post("/add", [authenticate, permit([1])], async (req, res) => {
  try {
    const snacks = await Snacks.create(req.body);
    res.json({ msg: "Success fully added product" });
  } catch (error) {
    res.json({
      msg: "Restricted Access",
    });
  }
});

router.get("/all", async (req, res) => {
  try {
    const product = await Snacks.find({}).select(
      "-createdAt -updatedAt -password -__v"
    );

    res.json({ success: true, product });
  } catch (error) {
    res.json({ msg: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Snacks.find({ _id: req.params.id }).select(
      "-createdAt -updatedAt -password -__v"
    );

    res.json({ success: true, product });
  } catch (error) {
    res.json({ msg: error.message });
  }
});

// router.get("/lowprice", async (req, res) => {
//   try {
//     const snacks = await Snacks.find({})
//       .select("-createdAt -updatedAt -password -__v")
//       .sort({ price: 1 });

//     res.json({ success: true, snacks });
//   } catch (error) {
//     res.json({ msg: error.message });
//   }
// });

// router.get("/highestprice", async (req, res) => {
//   try {
//     const snacks = await Snacks.find({})
//       .select("-createdAt -updatedAt -password -__v")
//       .sort({ price: -1 });

//     res.json({ success: true, snacks });
//   } catch (error) {
//     res.json({ msg: error.message });
//   }
// });

router.put("/update/:id", [authenticate, permit([1])], async (req, res) => {
  try {
    const product = await Snacks.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      {
        name: req.body.name,
        weight: req.body.weight,
        price: req.body.price,
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
    const product = await Snacks.findByIdAndDelete(
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
