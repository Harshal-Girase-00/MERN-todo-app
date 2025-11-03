const items = require("../models/items");

exports.createItems = async (req, res, next) => {
  console.log(req.body);
  const { task, date } = req.body;
  const item = new items({ task, date });
  await item.save();
  res.status(201).json(item);
};

exports.getAllItems = async (req, res, next) => {
  try {
    const allItems = await items.find();
    res.status(200).json(allItems);
  } catch (error) {
    next(error);
  }
};

exports.deleteItem = async (req, res, next) => {
  try {
    const itemId = req.params.id;
    const deleteItem = await items.findByIdAndDelete(itemId);

    if (!deleteItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json(deleteItem);
  } catch (error) {
    next(error);
  }
};

exports.markCompleted = async (req, res, next) => {
  try {
    const itemId = req.params.id;
    const markCompleted = await items.findByIdAndUpdate(itemId, { completed: true }, { new: true });
    res.status(200).json(markCompleted);
  } catch (error) {
    next(error);
  }
};
