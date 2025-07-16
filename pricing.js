const express = require('express');
const router = express.Router();

// POST /api/pricing/calculate
router.post('/calculate', (req, res) => {
  let { tier, vulnerability, urban, funder, promo } = req.body;
  let basePrice = 0;

  if (tier === "free") basePrice = 0;
  else if (tier === "affordable") basePrice = 400;
  else if (tier === "premium") basePrice = 1500;
  else if (tier === "corporate") basePrice = 5000;

  if (vulnerability === "lowIncome") basePrice *= 0.7;
  else if (vulnerability === "indigenous") basePrice *= 0.75;
  else if (vulnerability === "pwds") basePrice *= 0.8;
  else if (vulnerability === "youth") basePrice *= 0.85;

  if (urban === "urban") basePrice *= 1.2;
  if (funder === "yes") basePrice *= 1.1;

  if (promo === "mentalhealthmonth") basePrice -= 200;
  else if (promo === "studentaccess") basePrice -= 300;

  if (basePrice < 0) basePrice = 0;

  res.json({ price: basePrice.toFixed(2) });
});

module.exports = router;
