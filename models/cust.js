const mongoose = require("mongoose");

const CustSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  number: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  // cid: {
  //   type: String,
  //   required: true,
  // },
});
module.exports = mongoose.model("Details", CustSchema);
