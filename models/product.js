const mongoose = require("mongoose");

const ProdSchema = mongoose.Schema({
  pname: String,
  quantity: String,
  pricing: String,
  mrp: String,
  poid: String,
  cid: String,
});

module.exports = mongoose.model("Products", ProdSchema);
