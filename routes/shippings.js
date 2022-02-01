const express = require("express");
const router = express.Router();
const Shipping = require("../models/shipping");

router.get("/", async (req, res) => {
  try {
    const shippings = await Shipping.find();
    // .where("city").equals("London");
    res.json(shippings);
  } catch (err) {
    res.json({ messsage: err });
  }
});

router.post("/", async (req, res) => {
  const shipping = new Shipping({
    address: req.body.address,
    city: req.body.city,
    pincode: req.body.pincode,
    poid: req.body.poid,
    cid: req.body.cid,
  });

  try {
    const savedShipping = await shipping.save();
    res.json(savedShipping);
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
});
module.exports = router;
