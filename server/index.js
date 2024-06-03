require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes'); // Ensure this path is correct

require('./config/passportConfig'); // Ensure this path is correct

const app = express();

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

// Middleware for session handling
app.use(session({
  secret: 'your-session-secret',
  resave: false,
  saveUninitialized: false,
}));

// Initialize Passport and session
app.use(passport.initialize());
app.use(passport.session());

// Use auth routes
app.use('/auth', authRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('Home Page');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});