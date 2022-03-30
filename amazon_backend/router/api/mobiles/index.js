const router = require("express").Router();

const mi = require("./mi");
const mi_Reviews = require("./mi/reviews");

const iphone = require("./iphone");
const iphone_Reviews = require("./iphone/reviews");

const poco = require("./poco");
const poco_Reviews = require("./poco/reviews");

const realme = require("./realme");
const realme_Reviews = require("./realme/reviews");

const samsung = require("./samsung");
const samsung_Reviews = require("./samsung/reviews");

const oneplus = require("./oneplus");
const oneplus_Reviews = require("./oneplus/reviews");

router.use("/iphone", iphone);
router.use("/iphone_reviews", iphone_Reviews);

router.use("/mi", mi);
router.use("/mi_reviews", mi_Reviews);

router.use("/poco", poco);
router.use("/poco_reviews", poco_Reviews);

router.use("/realme", realme);
router.use("/realme_reviews", realme_Reviews);

router.use("/samsung", samsung);
router.use("/samsung_reviews", samsung_Reviews);

router.use("/oneplus", oneplus);
router.use("/oneplus_reviews", oneplus_Reviews);

module.exports = router;

module.exports = router;
