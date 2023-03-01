require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const navigationRoutes = require("./routes/navigation");
const homepageRoutes = require("./routes/homepage");
const contactFormEmailTncRoutes = require("./routes/contactFormEmailTnc");

const PORT = process.env.PORT || 5000;

const app = express();

// CORS fix
app.use(cors());

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/navigation", navigationRoutes);

// app.use("/shortstaysintl/api/homepage", homepageRoutes);
app.use("/api/homepage", homepageRoutes);

app.use("/contactform", contactFormEmailTncRoutes);

// connect to db
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log("listening on port", PORT);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

mongoose
  .connect(process.env.MONGO_URI_VPS)
  .then(() => {
    app.listen(PORT, () => {
      console.log("listening on port", PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
