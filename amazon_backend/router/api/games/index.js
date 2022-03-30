const router = require("express").Router();
const games = require("./game");
const games_reviews = require("./game/reviews");

router.use("/games", games);
router.use("/games_reviews", games_reviews);

module.exports = router;
