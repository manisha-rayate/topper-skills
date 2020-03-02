const mongoose = require("mongoose");

const countSchema = new mongoose.Schema({
  type: { type: String, required: true, minlength: 5, maxlength: 100 },
  count: { type: Number }
});

const Count = mongoose.model("Count", countSchema);
// collection name is user

module.exports = Count;

// 0->inactive
// 1->active
// 2->delete
