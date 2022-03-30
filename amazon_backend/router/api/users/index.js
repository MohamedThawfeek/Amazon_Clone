const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const User = require("../../../models/user/user");
const { authenticate, permit, verify } = require("../../../middleware");

router.get("/", (req, res) => {
  res.send("users");
});

router.post("/signup", async (req, res) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 10);
    req.body.password = hash;
    req.body.loginType = 2;
    const user = new User(req.body);
    await user.save();
    const token = await jwt.sign({ userId: user._id }, process.env.SECRET_KEY);
    const transport = nodemailer.createTransport({
      service: process.env.PLATFORM,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });

    let info = await transport.sendMail({
      from: process.env.EMAIL,
      to: req.body.email,
      subject: "Verification E-Mail",
      html: ` <div> 
      <p style="color: black; font-family: cursive; font-size:20px; letter-spacing: 1px; text-shadow: 2px 0 3px rgba(0, 0, 0, 0.6);"> welcome  <b style='font-family: monospace;'>${req.body.name}</b> Thank you  for choosing our platform and keep Shopping with us.</p>
        <div> 
        <button style="padding:10px; outline:none; border:none;   border-radius: 12px;">
        <a style="color: black; font-size:16px;  text-decoration: none;" href="https://my-first-amazon-clone-app.netlify.app/verify/${token}">Verify Email</a> </button>
        <p style="color: black; font-family:cursive; font-size:15px letter-spacing: 1px">Thanks For Regards </p>
        <p style="color: black; font-family: cursive; font-size:15px letter-spacing: 1px">Our Mini Team </p>
        </div>
       </div>`,
    });
    if (info) {
      res.json({
        msg: "Account has been created Successfully. Please verify your E-mail ",
      });
    }
  } catch (error) {
    res.json({
      msg: error.message,
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.json({ msg: "User not found" });
    }
    if (!user.verified) {
      return res.json({ msg: "Account not Verified" });
    }
    const match = await bcrypt.compare(req.body.password, user.password);
    if (match) {
      const token = await jwt.sign(
        {
          userId: user._id,
          loginType: user.loginType,
        },
        process.env.SECRET_KEY
      );
      return res.json({ token });
    } else {
      return res.json({ msg: "Wrong Password" });
    }
  } catch (error) {
    res.json({ msg: error.message });
  }
});

router.get("/data", authenticate, async (req, res) => {
  try {
    const user = await User.findById({ _id: req.userId }).select(
      "-createdAt -updatedAt -password -__v"
    );

    res.json({ success: true, user });
  } catch (error) {
    res.json({ msg: error.message });
  }
});

router.get("/verification", verify, async (req, res) => {
  try {
    const data = await User.findByIdAndUpdate(
      { _id: req.userId },
      { verified: true }
    );
    if (data) {
      return res.json({ success: true, msg: "Account has been verified" });
    }
  } catch (error) {
    res.json({ success: false, msg: error });
  }
});

router.get("/usersData", [authenticate, permit([1])], async (req, res) => {
  try {
    const user = await User.find({}).select(
      "-createdAt -updatedAt -password -__v "
    );

    res.json({ success: true, user });
  } catch (error) {
    res.json({ success: false, msg: error });
  }
});

router.put("/update/:userId", [authenticate, permit([1])], async (req, res) => {
  try {
    await User.findByIdAndUpdate(
      {
        _id: req.params.userId,
      },
      {
        name: req.body.name,
      },
      { new: true }
    );
    res.json({ msg: "Success fully changed" });
  } catch (error) {
    res.json({ msg: error.message });
  }
});

router.delete("/delete/:id", [authenticate, permit([1])], async (req, res) => {
  try {
    await User.findByIdAndDelete(
      {
        _id: req.params.id,
      },

      { new: true }
    );
    res.json({ msg: "Success Fully Deleted" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
