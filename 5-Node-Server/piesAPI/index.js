require("dotenv").config();

const express = require("express");
const app = express();
const pie = require("./controllers/pieController");
const user = require("./controllers/userController");
const sequelize = require("./db");
const bodyParser = require("body-parser");

sequelize.sync();
// sequelize.sync({ force: true });

app.use(bodyParser.json());

app.use(require("./middleware/header"));

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => res.render("index"));

app.use("/pies", pie);

app.use("/auth", user);

app.listen(process.env.PORT, () =>
  console.log(`App is listening on ${process.env.PORT}`)
);
