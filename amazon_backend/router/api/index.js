const router = require("express").Router();

const user = require("./users");
const books = require("./books");
const games = require("./games");
const grocery = require("./grocerry");
const homeAppliance = require("./home appliance");
const computers = require("./laptop");
const mobiles = require("./mobiles");
const software = require("./software");
const checkout = require("./checkoutPage");
const payment = require("./razorpay");

router.use("/users", user);
router.use("/books", books);
router.use("/", games);
router.use("/grocery", grocery);
router.use("/homeAppliance", homeAppliance);
router.use("/computers", computers);
router.use("/mobiles", mobiles);
router.use("/softwares", software);
router.use("/cart", checkout);
router.use("/payment", payment);

module.exports = router;
