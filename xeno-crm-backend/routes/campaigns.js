const express = require("express");
const router = express.Router();
const Campaign = require("../models/Campaign");

router.post("/", async (req, res) => {
  try {
    const campaign = new Campaign(req.body);
    await campaign.save();
    res.status(201).json(campaign);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  const campaigns = await Campaign.find();
  res.json(campaigns);
});

module.exports = router;
