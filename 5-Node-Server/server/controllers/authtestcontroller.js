const router = require("express").Router();
const sequelize = require("../db");
const User = sequelize.import("../models/user");
const AuthTestModel = sequelize.import("../models/authtest");

router.get("/getall", function(req, res) {
  var userid = req.user.id;

  AuthTestModel.findAll({
    where: { owner: userid }
  }).then(
    function findAllSuccess(data) {
      res.json(data);
    },
    function findAllError(err) {
      res.send(500, err.message);
    }
  );
});

router.post("/create", (req, res) => {
  var owner = req.user.id;
  var authTestData = req.body.authtestdata.item;

  AuthTestModel.create({
    authtestdata: authTestData,
    owner: owner
  }).then(
    function createSucess(authtestdata) {
      res.json({
        authtestdata: authtestdata
      });
    },
    function createError(err) {
      res.send(500, err.message);
    }
  );
});

router.get("/:id", function(req, res) {
  var data = req.params.id;
  var userid = req.user.id;

  AuthTestModel.findOne({
    where: { id: data, owner: userid }
  }).then(
    function findOneSuccess(data) {
      res.json(data);
    },
    function findOneError(err) {
      res.send(500, err.message);
    }
  );
});

router.delete("/delete/:id", function(req, res) {
  var data = req.params.id;
  var userid = req.user.id;

  AuthTestModel.destroy({
    where: { id: data, owner: userid }
  }).then(
    function deleteLogSuccess(data) {
      res.send("you removed a log");
    },
    function deleteLogError(err) {
      res.send(500, err.message);
    }
  );
});

router.put("/update/:id", function(req, res) {
  var data = req.params.id;
  var authtestdata = req.body.authtestdata.item;

  AuthTestModel.update(
    {
      authtestdata: authtestdata
    },
    { where: { id: data } }
  ).then(
    function updateSuccess(updatedLog) {
      res.json({ authtestdata: authtestdata });
    },
    function updateError(err) {
      res.send(500, err.message);
    }
  );
});
module.exports = router;
