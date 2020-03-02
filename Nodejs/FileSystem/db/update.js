require("./db");

const Customer = require("./customer.model");

// Customer.findOneAndUpdate(
//   { name: "ppp" },
//   { name: "updated name" },
//   (err, result) => {
//     if (err) console.log("Could not update the document");
//     else console.log("Document updated successfully");
//   }
// );

Customer.update(
  {},
  { mobile: "1111111111" },
  { multi: true },
  (err, result) => {
    console.log(result);
  }
);
