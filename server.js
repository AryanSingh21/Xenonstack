const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDb = require("./config/database");
const path = require("path");

//router imports
const userRoutes = require("./routes/userRoutes");
const queryRoutes = require("./routes/queryRoutes");
//env config
dotenv.config();

//database setup
connectDb();

//objects
const app = express();

//middle
app.use(express.json());
app.use(morgan("dev"));

//static files
app.use(express.static(path.join(__dirname, "./client/build")));

//routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/query", queryRoutes);

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//port

const PORT = process.env.PORT || 4000;

//app listen

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
