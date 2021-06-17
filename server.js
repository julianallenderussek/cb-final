require("dotenv").config({ path: "./config.env" });
const express = require("express");
const connectDB = require("./config/db")
const errorHandler = require('./middleware/error')

//Connect DB
connectDB();

const app = express();

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));
app.use("/api/user", require("./routes/user"));

//Error Handler needs to be the last piece of middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

process.on("unhandledRejection", (error, promise) => {
  console.log(`Logged Error: ${error}`);
  server.close(() => process.exit(1))
})

