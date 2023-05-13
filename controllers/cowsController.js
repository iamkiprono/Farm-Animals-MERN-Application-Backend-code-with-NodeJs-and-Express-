const Cow = require("../models/cowsModel");

// get all cows
const getCows = async (req, res) => {
  try {
    const cows = await Cow.find();
    res.send(cows);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get single cow
const getCow = async (req, res) => {
  const { id } = req.params;
  try {
    const cow = await Cow.find({ _id: id });
    if (!cow.length) {
      throw Error("No such cow");
    }
    res.send(cow);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// add cow
const addCow = async (req, res) => {
  const { name, age } = req.body;
  try {
    const cow = await Cow.create({ name, age });
    res.send(cow);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

// delete a cow
const deleteCow = async (req, res) => {
  try {
    const { id } = req.params;
    const cow = await Cow.findByIdAndDelete(id);
    if (!cow) {
      throw Error("No such cow");
    }
    res.status(200).json({ message: "Cow deleted", cow });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { addCow, getCows, deleteCow, getCow };
