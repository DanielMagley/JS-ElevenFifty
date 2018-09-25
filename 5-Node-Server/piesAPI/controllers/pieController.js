let express = require("express");
let router = express.Router();

router.get("/", (req, res) => res.send("I love Pie!"));
router.get("/tasty", (req, res) => res.send("Pies are tasty"));

module.exports = router;
