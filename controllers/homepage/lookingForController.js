const LookingFor = require("../../models/homepage/lookingForModel");

// get all content
const getLookingForContent = async (req, res) => {
  const lookingForContent = await LookingFor.find({});

  res.status(200).json(lookingForContent);
};

module.exports = {
  getLookingForContent,
};
