const express = require('express');
const router = express.Router();

// POST /api/engagement/track
router.post('/track', (req, res) => {
  const { userId, action } = req.body;
  console.log(`User ${userId} did ${action}`);
  // Extend: save to DB, trigger Zapier webhook, etc.
  res.json({ status: 'ok' });
});

module.exports = router;
