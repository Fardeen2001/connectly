const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");

// Helper function to generate a 6-digit OTP
const generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000).toString(); // Generates a 6-digit OTP
};

// User Registration
exports.register = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    user = new User({
      name,
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Generate OTP
    const otp = generateOtp();
    const otpExpires = Date.now() + 10 * 60 * 1000; // OTP expires in 10 minutes

    user.otp = otp;
    user.otpExpires = otpExpires;

    await user.save();

    // Send OTP email
    const subject = "Verify Your Email for Connectly";
    const message = `Dear ${name},\n\nWelcome to Connectly! Please verify your email address using the following OTP:\n\n${otp}\n\nThis OTP is valid for 10 minutes.\n\nThank you,\nTeam Connectly`;

    await sendEmail(email, subject, message);
    res.status(201).json({
      message: "OTP sent to your email. Please verify your account.",
      data: { id: user._id, name, email },
    });
  } catch (err) {
    console.log("Error");
    console.error(err);
    res.status(500).send("Server error");
  }
};

// User Login
exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    if (!user.isVerified) {
      return res.status(400).json({
        message: "Please verify your email first",
        requiresVerification: true,
      });
    }

    const payload = {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "30d" },
      (err, token) => {
        if (err) throw err;
        res.header("x-auth-token", token);
        res.json({ token, id: user.id, name: user.name, email: user.email });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Verify OTP
exports.verifyOtp = async (req, res, next) => {
  const { email, otp } = req.body;
  console.log(email, otp);
  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    if (user.otp !== otp || user.otpExpires < Date.now()) {
      return res.status(400).json({ message: "OTP is invalid or has expired" });
    }

    user.isVerified = true;
    user.otp = undefined;
    user.otpExpires = undefined;

    await user.save();

    res.status(200).json({ message: "Email verified successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Middleware to protect routes
exports.authenticate = (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token) {
    console.log("NOr token");
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    console.log("Token not valid");
    res.status(401).json({ message: "Token is not valid" });
  }
};

exports.loadAuth = (req, res) => {
  res.render("auth");
};

// Logout
exports.logout = (req, res) => {
  res.status(200).json({ message: "Logged out successfully" });
};
