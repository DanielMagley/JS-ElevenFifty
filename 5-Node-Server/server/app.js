require("dotenv").config();

var express = require("express");
var app = express();
var test = require("./controllers/testcontrollers");
var authTest = require("./controllers/authtestcontroller");

var user = require("./controllers/usercontroller");
var sequelize = require("./db");
var bodyParser = require("body-parser");

// app.use("/api/test", function(req, res) {
//   res.send("This is data from the /api/test endpoint. It's from the server.");
// });

sequelize.sync();
app.use(bodyParser.json());
app.use(require("./middleware/header"));

app.use("/test", test);
app.use("/api/user", user);

app.use(require("./middleware/validate-session"));
app.use("/authtest", authTest);

app.listen(3001, function() {
  console.log("Hey man! Listening on 3001");
});
