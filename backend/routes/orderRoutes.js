const express = require('express');
const Order = require('../models/Order');

const router = express.Router();

// Submit an order
router.post('/submit', async (req, res) => {
  try {
    const { name, email, address, cakeType, notes } = req.body;
    const newOrder = new Order({ name, email, address, cakeType, notes });
    await newOrder.save();
    res.status(201).json({ message: 'Order submitted successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit order' });
  }
});

module.exports = router;