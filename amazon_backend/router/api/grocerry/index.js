const router = require("express").Router();
const baby = require("./babycare");
const snacks = require("./snacks");
const staples = require("./staples");
const packagedfood = require("./packaged food");
const household = require("./household care");

router.use("/babycare", baby);
router.use("/snacks", snacks);
router.use("/staples", staples);
router.use("/packagedfood", packagedfood);
router.use("/household", household);

module.exports = router;
