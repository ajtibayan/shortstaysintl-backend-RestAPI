const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const navigationSchema = new Schema(
  {
    socialMedia: { hrefLink: { String }, faIcon: { String }, name: { String } },
  },
  {
    mainNav: { linkTo: { String }, linkName: { String } },
  }
);

module.exports = mongoose.model("navigation", navigationSchema);
