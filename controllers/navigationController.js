const Navigation = require("../models/navigationModel");

// get all navigation content
const getNavigationContent = async (req, res) => {
  const navigationContent = await Navigation.find({});

  res.status(200).json(navigationContent);
};

module.exports = {
  getNavigationContent,
};
