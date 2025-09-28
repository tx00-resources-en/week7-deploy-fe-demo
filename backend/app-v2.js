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
const cors = require("cors");

connectDB();

// Middlewares
// const corsOptions = {
//   origin:
//     process.env.NODE_ENV === "production" ? process.env.ALLOWED_ORIGIN : "*", // '*' allows all origins in development
// };

// app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static('view'))

// Use the jobRouter for all "/jobs" routes
app.use("/api/jobs", jobRouter);
// Use the userRouter for all "/jobs" routes
app.use("/api/users", userRouter);

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/view/index.html');
});

app.use(unknownEndpoint);
app.use(errorHandler);

module.exports = app;

// app.listen(process.env.PORT, () => {
//   console.log(`Server running on port ${process.env.PORT}`)
// })
