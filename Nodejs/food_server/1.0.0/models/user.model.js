const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: Number,
  name: {
    type: String,
    required: true,
    minlength: 5, 
    maxlength: 45 },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 45,
    unique: true
  },
  mobile: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 15,
    unique: true
  },
  password: { type: String, minlength: 5, maxlength: 100 },
  status: { type: Number, min: 0, max: 5 }
});

const User = mongoose.model("User", userSchema);
// collection name is user

module.exports = User;

// 0->inactive
// 1->active
// 2->delete
