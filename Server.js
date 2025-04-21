const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View engine setup
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// API Routes
app.use("/api/blogs", require("./Routes/BlogRoutes"));
app.use("/api/projects", require("./Routes/projectroutes"));
app.use("/api/skills", require("./Routes/SkillRoutesTemp"));
app.use("/api/testimonials", require("./Routes/TestimonialRoutes"));

// Admin Panel Routes (add your admin panel views here)
// Example:
app.get("/admin/contacts", (req, res) => {
  res.render("contacts"); // Make sure there's a views/contacts.pug file
});

// Default route
app.get("/", (req, res) => {
  res.send("Server running on port");
});

// Start Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
