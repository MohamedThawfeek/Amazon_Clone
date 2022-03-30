const router = require("express").Router();

const dell = require("./dell");
const dell_Reviews = require("./dell/reviews");

const hp = require("./hp");
const hp_Reviews = require("./hp/reviews");

const lenovo = require("./lenovo");
const lenovo_Reviews = require("./lenovo/reviews");

const mac = require("./mac");
const mac_Reviews = require("./mac/reviews");

router.use("/dell", dell);
router.use("/dell_reviews", dell_Reviews);

router.use("/hp", hp);
router.use("/hp_reviews", hp_Reviews);

router.use("/lenovo", lenovo);
router.use("/lenovo_reviews", lenovo_Reviews);

router.use("/mac", mac);
router.use("/mac_reviews", mac_Reviews);

module.exports = router;
