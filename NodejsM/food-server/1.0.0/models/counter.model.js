const mongoose = require("mongoose");

const counterSchema = new mongoose.Schema({
  type: { type: String, required: true, minlength: 5, maxlength: 100 },
  count: { type: Number }
});

const Counter = mongoose.model("Counter", counterSchema);
// collection name is user

module.exports = Counter;

// 0->inactive
// 1->active
// 2->delete
