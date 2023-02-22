const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const lookingForSchema = new Schema({
  faIcon: { String },
  heading: { String },
  text: { String },
});

module.exports = mongoose.model("homepageLookingFor", lookingForSchema);
