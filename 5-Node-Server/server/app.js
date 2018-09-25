var express = require("express");
var app = express();
var test = require("./controllers/testcontrollers");

app.listen(3002, function() {
  console.log("Hey man!!!");
});

app.use("/api/test", function(req, res) {
  res.send("This is data from the /api/test endpoint. It's from the server.");
});

app.use("/test", test);
