const router = require("express").Router();
const Books = require("../../../models/books/book");
const { authenticate, permit } = require("../../../middleware");

router.get("/", (req, res) => {
  res.send("books");
});

router.post("/add", [authenticate, permit([1])], async (req, res) => {
  try {
    await Books.create(req.body);
    res.json({ msg: "Success fully added product" });
  } catch (error) {
    res.json({
      msg: "Restricted Access",
    });
  }
});

router.get("/all", async (req, res) => {
  try {
    const product = await Books.find({}).select(
      "-createdAt -updatedAt -password -__v"
    );

    res.json({ success: true, product });
  } catch (error) {
    res.json({ msg: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Books.find({ _id: req.params.id }).select(
      "-createdAt -updatedAt -password -__v"
    );

    res.json({ success: true, product });
  } catch (error) {
    res.json({ msg: error.message });
  }
});

// router.get("/lowprice", async (req, res) => {
//   try {
//     const books = await Books.find({})
//       .select("-createdAt -updatedAt -password -__v")
//       .sort({ price: 1 });

//     res.json({ success: true, books });
//   } catch (error) {
//     res.json({ msg: error.message });
//   }
// });

// router.get("/highestprice", async (req, res) => {
//   try {
//     const books = await Books.find({})
//       .select("-createdAt -updatedAt -password -__v")
//       .sort({ price: -1 });

//     res.json({ success: true, books });
//   } catch (error) {
//     res.json({ msg: error.message });
//   }
// });

router.put("/update/:id", [authenticate, permit([1])], async (req, res) => {
  try {
    await Books.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      {
        name: req.body.name,
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
    await Books.findByIdAndDelete(
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
