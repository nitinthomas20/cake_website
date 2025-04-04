const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  cakeType: { type: String, required: true },
  notes: { type: String },
});

module.exports = mongoose.model('Order', orderSchema);