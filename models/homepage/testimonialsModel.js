const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const testimonialsSchema = new Schema({
  testimonialNum: { String },
  blockquoteClass: { String },
  mediaImg: { String },
  quoteText: { String },
  quoterName: { String },
});

module.exports = mongoose.model("homepageTestimonial", testimonialsSchema);
