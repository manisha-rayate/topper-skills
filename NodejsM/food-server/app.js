const express = require("express");
const bodyParser = require("body-parser");
require("./1.0.0/shared/db");
// const userRoute = require("./1.0.0/routes/user.route");
const app = express();
const PORT = process.env.PORT || 8888;

app.use(function (req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Header", 
      "Origin, X-Requested-With, Content-Type, Authorization, Accept, X-token");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  res.header('access-control-expose-headers', 'X-token');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/v1/user", userRoute);

// app.use("./api/v1/user", userRoute, require("./1.0.0/routes/user.route"));

// http://127.0.0.1:8888/api/v1/user

app.listen(PORT, () => {
  console.log(`server is listening at PORT ${PORT}`);
});
