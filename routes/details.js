const express = require("express");
const router = express.Router();
const Detail = require("../models/cust");

router.get("/", async (req, res) => {
  try {
    const details = await Detail.find();
    res.json(details);
  } catch (err) {
    res.json({ messsage: err });
  }
});

router.post("/", async (req, res) => {
  const detail = new Detail({
    name: req.body.name,
    email: req.body.email,
    number: req.body.number,
    city: req.body.city,
    // cid: req.body.cid,
  });

  try {
    const savedDetail = await detail.save();
    res.json(savedDetail);
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
});
module.exports = router;
