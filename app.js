const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(bodyParser.json());

const custRoute = require("./routes/details");
const prodRoute = require("./routes/products");
const shipRoute = require("./routes/shippings");
app.use("/details", custRoute);
app.use("/products", prodRoute);
app.use("/shippings", shipRoute);
app.get("/", (req, res) => {
  res.send("We can see customer details");
});
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("connected to mongo!!!");
  app.listen(3000);
});
