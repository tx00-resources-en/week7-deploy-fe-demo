require("dotenv").config();
const express = require("express");
const app = express();
const jobRouter = require("./routes/jobRouter");
const userRouter = require("./routes/userRouter");
const {
  unknownEndpoint,
  errorHandler,
} = require("./middleware/customMiddleware");
const connectDB = require("./config/db");

connectDB();

app.use(express.json());
app.use(express.static('view'))

// Use the jobRouter for all "/jobs" routes
app.use("/api/jobs", jobRouter);
// Use the userRouter for all "/jobs" routes
app.use("/api/users", userRouter);

app.use('/api', unknownEndpoint);
app.use(errorHandler);

// Import Node's built‑in 'path' module to safely handle file and directory paths
const path = require('path');
// Serve all static files (HTML, CSS, JS, images, etc.) from the 'view' folder
// Example: a request to '/index.html' will return 'view/index.html'
app.use(express.static(path.join(__dirname, 'view')));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'index.html'));
});


module.exports = app;

