const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path'); // ✅ Missing import

require('dotenv').config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Pug setup
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

  // api Routes

  app.use("/api/blogs", require("./Routes/blogroutes"));
  app.use("/api/contacts", require("./Routes/contactroutes"));
  app.use("/api/projects", require("./Routes/projectroutes"));
  app.use("/api/skills", require("./Routes/skillroutes"));
  app.use("/api/testimonials", require("./Routes/testimonialroutes"));
  app.use("/api/testimonials", require("./Routes/testimonialroutes")); // ✅ Fixed path

//admin panel routes
// Add routes for the admin panel (using `res.render` for views)
 // Admin panel for contacts

// Default route
app.get("/", (req, res) => {
  res.send("Server running on port");
});

// Server start
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
