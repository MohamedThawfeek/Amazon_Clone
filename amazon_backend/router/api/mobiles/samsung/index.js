const router = require("express").Router();
const Samsung = require("../../../../models/mobiles/samsung/samsung");
const { authenticate, permit } = require("../../../../middleware");

router.get("/", (req, res) => {
  res.send("Mi");
});

router.post("/add", [authenticate, permit([1])], async (req, res) => {
  try {
    const samsung = await Samsung.create(req.body);
    res.json({ msg: "Success fully added product" });
  } catch (error) {
    res.json({
      msg: "Restricted Access",
    });
  }
});

router.get("/all", async (req, res) => {
  try {
    const product = await Samsung.find({}).select(
      "-createdAt -updatedAt -password -__v -reviews"
    );

    res.json({ success: true, product });
  } catch (error) {
    res.json({ msg: error.message });
  }
});

router.get("/all/reviews", async (req, res) => {
  try {
    const product = await Samsung.find({})
      .select(
        "-createdAt -updatedAt -password -__v -_id  -name -images -price -color"
      )
      .populate("reviews", "name messages  -_id");

    res.json({ success: true, product });
  } catch (error) {
    res.json({ msg: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Samsung.find({ _id: req.params.id }).select(
      "-createdAt -updatedAt -password -__v"
    );

    res.json({ success: true, product });
  } catch (error) {
    res.json({ msg: error.message });
  }
});

// router.get("/lowprice", async (req, res) => {
//   try {
//     const samsung = await Samsung.find({})
//       .select("-createdAt -updatedAt -password -__v")
//       .sort({ price: 1 });

//     res.json({ success: true, samsung });
//   } catch (error) {
//     res.json({ msg: error.message });
//   }
// });

// router.get("/highestprice", async (req, res) => {
//   try {
//     const samsung = await Samsung.find({})
//       .select("-createdAt -updatedAt -password -__v")
//       .sort({ price: -1 });

//     res.json({ success: true, samsung });
//   } catch (error) {
//     res.json({ msg: error.message });
//   }
// });

router.put("/update/:id", [authenticate, permit([1])], async (req, res) => {
  try {
    const product = await Samsung.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      {
        name: req.body.name,
        price: req.body.price,
        color: req.body.color,
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
    const product = await Samsung.findByIdAndDelete(
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