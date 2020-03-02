const mongoose = require("mongoose");

const CustomerSChema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  mobile: String
});
const Customer = mongoose.model("Customer", CustomerSChema);

module.exports = Customer;
