const express = require("express");
const Product = require("../models/product");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.json({ messsage: err });
  }
});

router.post("/", async (req, res) => {
  const product = new Product({
    pname: req.body.pname,
    quantity: req.body.quantity,
    pricing: req.body.pricing,
    mrp: req.body.mrp,
    poid: req.body.poid,
    cid: req.body.cid,
  });

  try {
    const savedProduct = await product.save();
    res.json(savedProduct);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
