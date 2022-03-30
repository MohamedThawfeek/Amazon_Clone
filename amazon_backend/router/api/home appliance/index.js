const router = require("express").Router();

const ac = require("./ac");
const ac_reviews = require("./ac/reviews");

const tv = require("./tv");
const tv_reviews = require("./tv/reviews");

const fridge = require("./fridge");
const fridge_reviews = require("./fridge/reviews");

const oven = require("./oven");
const oven_reviews = require("./oven/reviews");

const fan = require("./fan");
const fan_reviews = require("./fan/reviews");

const washingMachine = require("./washing machine");
const washingMachine_reviews = require("./washing machine/reviews");

router.use("/ac", ac);
router.use("/ac_reviews", ac_reviews);

router.use("/tv", tv);
router.use("/tv_reviews", tv_reviews);

router.use("/fridge", fridge);
router.use("/fridge_reviews", fridge_reviews);

router.use("/oven", oven);
router.use("/oven_reviews", oven_reviews);

router.use("/fan", fan);
router.use("/fan_reviews", fan_reviews);

router.use("/washing_Machine", washingMachine);
router.use("/washing_Machine_reviews", washingMachine_reviews);

module.exports = router;
