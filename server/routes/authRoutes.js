const express = require("express");
const {
  register,
  login,
  verifyOtp,
  logout,
  loadAuth,
} = require("../controllers/authController");
const {
  googleAuth,
  googleAuthCallback,
  googleLogout,
} = require("../config/passportConfig");
const router = express.Router();
// const passport = require("passport");
const {
  signupSuccessGoogleProvider,
} = require("../controllers/signupSuccessGoogleProvider");

router.post("/register", register);
router.get("/register/google", loadAuth);
router.post("/login", login);
router.post("/verify-otp", verifyOtp);
router.post("/logout", logout);

// router.get(
//   "/google",
//   passport.authenticate("google", {
//     scope: ["profile", "email"],
//   })
// );

// router.get(
//   "/google/callback",
//   passport.authenticate("google", {
//     failureRedirect: "/api/auth/failure",
//     successRedirect: "/api/auth/sucess",
//   })
// );

// router.get("/sucess", signupSuccessGoogleProvider);
// router.get("/failure", (req, res) => {
//   res
//     .status(500)
//     .json({ error: "Authentication failed", success: false, status: 400 });
// });

// google routers || fardeen

router.get("/google", googleAuth);
router.get("/google/callback", googleAuthCallback);
router.get("/login/sucess", signupSuccessGoogleProvider);
router.get("/googleLogout", googleLogout);

module.exports = router;
