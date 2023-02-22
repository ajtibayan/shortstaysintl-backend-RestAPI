const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ourServicesSchema = new Schema({
  itemClass: { String },
  image: { String },
  serviceName: { String },
  serviceText: { String },
  linkLoc: { String },
});

module.exports = mongoose.model("homepageOurService", ourServicesSchema);
