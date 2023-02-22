const OurServices = require("../../models/homepage/ourServicesModel");

// get all content
const getOurServicesContent = async (req, res) => {
  const ourServicesContent = await OurServices.find({});

  res.status(200).json(ourServicesContent);
};

module.exports = {
  getOurServicesContent,
};
