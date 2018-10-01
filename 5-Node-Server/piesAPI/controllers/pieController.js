let express = require("express");
let router = express.Router();
//one line option -> let router = require("express").Router();
const Pie = require("../db").import("../models/pie");
// const sequelize = require('../db');
// const Pie = sequelize.import('../models/pie')
const validateSession = require("../middleware/validate-session");

// router.get("/", (req, res) => res.send("I love Pie!"));
// router.get("/tasty", (req, res) => res.send("Pies are tasty"));

router.get("/", (req, res) => {
  Pie.findAll()
    .then(pie => res.status(200).json(pie))
    .catch(err => res.status(500).json({ error: err }));
});

router.post("/", validateSession, (req, res) => {
  if (!req.errors) {
    const pieFromRequest = {
      nameOfPie: req.body.nameOfPie,
      baseOfPie: req.body.baseOfPie,
      crust: req.body.crust,
      timeToBake: req.body.timeToBake,
      servings: req.body.servings,
      rating: req.body.rating
    };

    Pie.create(pieFromRequest)
      .then(pie => res.status(200).json(pie))
      .catch(err => res.json(req.errors));
  } else {
    res.status(500).json(req.errors);
  }
});

//TO FIND
router.get("/:nameOfPie", (req, res) => {
  Pie.findOne({ where: { nameOfPie: req.params.nameOfPie } })
    .then(pie => res.status(200).json(pie))
    .catch(err => res.status(500).json({ error: err }));
});

//TO UPDATE
router.put("/:id", validateSession, (req, res) => {
  if (!req.errors) {
    Pie.update(req.body, { where: { id: req.params.id } })
      .then(pie => res.status(200).json(pie))
      .catch(err => res.json(req.errors));
  } else {
    res.status(500).json(req.errors);
  }
});

//TO DELETE
router.delete("/:id", validateSession, (req, res) => {
  Pie.destroy({ where: { id: req.params.id } })
    .then(pie => res.status(200).json(pie))
    .catch(err => res.status(500).json({ error: err }));
});

module.exports = router;
