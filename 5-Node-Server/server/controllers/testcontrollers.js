var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
  res.send("Hey!! This is a test route!");
});

router.get("/about", function(req, res) {
  res.send("This is an about route");
});

router.get("/contact", function(req, res) {
  res.send({
    user: "daniel",
    email: "danmag@app.com"
  });
});

router.get("/projects", function(req, res) {
  res.send(["project 1", "project 2", "project 3"]);
});

router.get("/mycontacts", function(req, res) {
  res.send([
    { user: "name", email: "user@email1" },
    { user: "name2", email: "user@email2" },
    { user: "name3", email: "user@email3" }
  ]);
});

module.exports = router;
