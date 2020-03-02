const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
  id: Number,
  title: {
    type: String,
    required: true,
    minlength: 5, 
    maxlength: 45 },
  type: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 45,
  },
  price: Number,
  dprice: Number,
  status: String,
  description: String,
  quantity: String,
  image: String
});

const Dish = mongoose.model("Dish", dishSchema);
// collection name is user

module.exports = Dish;

// 0->inactive
// 1->active
// 2->delete
