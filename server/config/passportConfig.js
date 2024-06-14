// const passport = require("passport");
// const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const User = require("../models/userModel");

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: "http://localhost:5500/api/auth/google/callback",
//       scope: ["profile", "email"],
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       try {
//         let user = await User.findOne({ googleId: profile.id });
//         if (user) {
//           user.googleToken = refreshToken;
//           await user.save();
//         }
//         if (!user) {
//           const newUser = new User({
//             email: profile.emails[0].value,
//             googleId: profile.id,
//             googleToken: refreshToken,
//             user: {
//               name: profile.displayName,
//               email: profile.emails[0].value,
//               profileImage: profile.photos[0].value,
//               provider: "google",
//             },
//             subscription: [],
//           });
//           user = await newUser.save();
//         }
//         return done(null, user);
//       } catch (error) {
//         return done(error, null);
//       }
//     }
//   )
// );

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser(async (id, done) => {
//   try {
//     const user = await User.findById(id);
//     done(null, user);
//   } catch (error) {
//     done(error, null);
//   }
// });

// module.exports = passport;

// google auth || fardeen
const { google } = require("googleapis");
const User = require("../models/userModel");

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  `${process.env.SERVER_URL}/api/auth/google/callback`
);

// Controller method for initiating Google OAuth2 flow
exports.googleAuth = (req, res) => {
  const scopes = [
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/userinfo.email",
  ];

  const url = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: scopes,
  });

  res.redirect(url);
};

// Controller method for handling Google callback
//http://localhost:3000/auth/google/callback?code=4/0ATx3LY54V5rk5o1wG2MdxIttErhPWO4nm7ZgjqdkA&scope=email%20profile%20https://www.googleapis.com/auth/indexing%20https://www.googleapis.com/auth/webmasters%20openid%20https://www.googleapis.com/auth/userinfo.profile%20https://www.googleapis.com/auth/userinfo.email&authuser=0&prompt=consent
exports.googleAuthCallback = async (req, res) => {
  const { code } = req.query;

  try {
    if (!code) {
      throw new Error("Authorization code missing or invalid");
    }

    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);
    const oauth2 = google.oauth2({
      auth: oauth2Client,
      version: "v2",
    });
    const userinfo = await oauth2.userinfo.get();
    console.log(userinfo?.data);
    if (userinfo?.data) {
      let user = await User.findOne({ email: userinfo?.data?.email });
      // console.log(user);
      if (user) {
        res.redirect(`${process.env.CLIENT_URL}/feed?id=${user._id}`);
        return;
      }
      if (!user) {
        const newUser = new User({
          name: userinfo?.data?.name,
          email: userinfo?.data?.email,
          password: "google",
          profileImage: userinfo?.data?.picture,
          isVerified: userinfo?.data?.verified_email,
        });
        user = await newUser.save();
        // console.log(user);
      }
      res.redirect(`${process.env.CLIENT_URL}/Pref?id=${user._id}`);
    }
  } catch (error) {
    res.redirect(`${process.env.CLIENT_URL}/auth`);
    res.status(500).send("Authentication error");
  }
};

// Controller method for logging out
exports.googleLogout = async (req, res) => {
  try {
    // Assuming you have a way to identify the current user
    const { userId } = req.query;
    console.log("logout", userId);

    if (userId) {
      const userData = await User.findById(userId);

      // Revoke the Google OAuth token
      // if (userData.googleToken && userData.googleToken.access_token) {
      //   await oauth2Client.revokeToken(userData.googleToken.access_token);
      // }

      // Clear user session/token from your database
      userData.googleToken = {}; // Clear the token or session
      await userData.save();
    }
    res.redirect(`${process.env.CLIENT_URL}/login`); // Redirect to login page or homepage
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).send("Logout failed");
  }
};
