const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  date: { type: String },
  veg: { type: [Number] },
  non_veg: { type: [Number] },
});

module.exports = mongoose.model("Order", OrderSchema);
