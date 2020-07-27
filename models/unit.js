const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UnitSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  hitPoints: {
    type: Number,
    required: true
  },
  gold: {
    type: Number,
    required: true
  },
  food: {
    type: Number,
    required: true
  },
  attack: {
    type: Number,
    required: true
  },
  race: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model("Unit", UnitSchema, "units");