const Testimonials = require("../../models/homepage/testimonialsModel");

// get all content
const getTestimonialsContent = async (req, res) => {
  const testimonialsContent = await Testimonials.find({});

  res.status(200).json(testimonialsContent);
};

module.exports = {
  getTestimonialsContent,
};
