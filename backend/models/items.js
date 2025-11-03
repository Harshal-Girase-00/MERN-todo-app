const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  task: {
    type: String,
    require: true,
  },
  date: Date,
  completed: {
    type: Boolean,
    default: false,
  },},
  {timestamps: true}
);

module.exports = mongoose.model("items", itemSchema);
