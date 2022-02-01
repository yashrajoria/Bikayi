const mongoose = require("mongoose");

const ShipSchema = mongoose.Schema({
  address: String,
  city: String,
  pincode: String,
  poid: String,
  cid: String,
});

module.exports = mongoose.model("Shippings", ShipSchema);
