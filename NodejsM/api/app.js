const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8888;

// Note: express() is a global function in express package by calling it we gets a reference of server object

app.use(bodyParser.json());

// bodyParser is a middleware which parses the request body json, converts it into valid javascript object and make that object avilable at 'req.body'

app.use(function(req, res, next) {
  console.log("got  a new req");
  next();
});

app.get("/", (req, res) => {
  res.send("Home page");
});

app.post("/", (req, res) => {
  console.log("request body", req.body);
  res.send("you have send data");
});

// http://127.0.0.1:8888/

app.listen(PORT, () => {
  console.log(`server is listening at port ${PORT}`);
});
