var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/foodapp", { useNewUrlParser: true });

var db = mongoose.connection;

// connection Events

// when successfully connected

db.on("connected", function() {
  console.log("Mongoose default connection open to");
});

// if the connection throw and error

db.on("error", function(err) {
  console.log("Mongoose default connection error:" + err);
});

// when the connection is disconnected

db.on("disconnected", function() {
  console.log("Mongoose default connection disconnected");
});

// if the Node process extends, close the Mongoose connection

process.on("SIGINT", function() {
  db.close(function() {
    console.log(
      "Mongoose default connection disconnected throw app termination"
    );

    process.exit(0);
  });
});
