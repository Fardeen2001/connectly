require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
// const passport = require("passport");
// const session = require("express-session");
const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");
const postRoutes = require("./routes/postRoutes");
const requestRoutes = require("./routes/requestRoutes");
const storyRoutes = require("./routes/storyRoutes");
const vcRoutes = require("./routes/vcRoutes");
const NotficationRoutes = require("./routes/notificationRoutes");
const preferencesRoutes = require("./routes/preferencesRoutes");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const profileModel = require("./models/profileModel");
const jwt = require("jsonwebtoken");

// require("./config/passportConfig");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

// app.set("view engine", "ejs");

// Use auth routes
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/post", postRoutes);
app.use("/api/request", requestRoutes);
app.use("/api/story", storyRoutes);
app.use("/api/vc", vcRoutes);
app.use("/api/notifications", NotficationRoutes);
app.use("/api/preferences", preferencesRoutes);

// Socket.IO connection handler
io.on("connection", (socket) => {
  console.log("a user connected: " + socket.id);

  // Handle joining a chat room
  socket.on("joinRoom", (room) => {
    socket.join(room);
    console.log(`User ${socket.id} joined room ${room}`);
  });

  // Handle leaving a chat room
  socket.on("leaveRoom", (room) => {
    socket.leave(room);
    console.log(`User ${socket.id} left room ${room}`);
  });

  // Handle sending a message
  socket.on("chatMessage", (msg) => {
    io.to(msg.room).emit("chatMessage", msg);
    console.log(`Message: ${msg.text} from ${msg.sender} in room ${msg.room}`);
  });

  // Handle disconnect
  socket.on("disconnect", () => {
    console.log("user disconnected: " + socket.id);
  });
});

// Basic route
app.get("/", (req, res) => {
  res.send("Home Page");
});

// Get profile data from user ID
app.get("/api/profileDetails", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    const userId = req.header("user-id");

    if (!token) {
      return res
        .status(401)
        .json({ message: "No token, authorization denied" });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(400).json({ message: "Token is not valid" });
    }

    if (!userId) {
      return res
        .status(400)
        .json({ message: "No user ID provided in headers" });
    }

    const profileDetails = await profileModel.findOne({ user: userId });

    if (!profileDetails) {
      return res.status(404).json({ message: "Profile not found" });
    }

    return res.status(200).json(profileDetails);
  } catch (error) {
    console.error("Error fetching profile details:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Start the server
const PORT = process.env.PORT || 5500;
server.listen(PORT, () => {
  console.log(`Server is up and running at on http://localhost:${PORT}`);
});
