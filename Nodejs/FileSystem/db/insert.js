require("./db");
const Customer = require("./customer.model");

let s = {
  name: "ppp",
  rollNo: 14,
  college: "MIT",
  sdsds: "Pune",
  mobile: "1221112458",
  email: "mayank@gmail.com"
};

const cust = new Customer(s);

cust
  .save()
  .then(() => {
    console.log("Customer saved successfully");
  })
  .catch(err => {
    console.log("Could not inserted");
    console.log(err.errmsg);
  });
