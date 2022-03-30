const router = require("express").Router();
const Checkout = require("../../../models/Checkout/checkout");
const { authenticate } = require("../../../middleware");

router.get("/", (req, res) => {
  res.send("books");
});

router.post("/add", async (req, res) => {
  try {
    await Checkout.create(req.body);
    res.json({ msg: "Added to the Cart" });
  } catch (error) {
    res.json({
      msg: error.message,
    });
  }
});

router.get("/all", async (req, res) => {
  try {
    const product = await Checkout.find({}).select(
      "-createdAt -updatedAt -password -__v"
    );

    res.json({ success: true, product });
  } catch (error) {
    res.json({ msg: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Checkout.find({ _id: req.params.id }).select(
      "-createdAt -updatedAt -password -__v"
    );

    res.json({ success: true, product });
  } catch (error) {
    res.json({ msg: error.message });
  }
});

router.delete("/delete/:id", [authenticate], async (req, res) => {
  try {
    await Checkout.findByIdAndDelete(
      {
        _id: req.params.id,
      },

      { new: true }
    );
    res.json({ msg: "Removed the item cart" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
