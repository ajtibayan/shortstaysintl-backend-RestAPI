require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const navigationRoutes = require("./routes/navigation");
const homepageRoutes = require("./routes/homepage");

const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/navigation", navigationRoutes);

app.use("/api/homepage", homepageRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
