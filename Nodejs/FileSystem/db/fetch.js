const db = require("./db");

const Customer = require("./customer.model");

// export function saveUser(user){
//     const cust = new Customer(user);
//     cust.save().then(()=>{
//         console.log("Customer saved successfully");

//     })
// }

Customer.find({}, (err, result) => {
  if (err) console.log("Error");
  console.log(result);
});
