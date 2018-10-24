let express = require("express");
let sequelize = require("./db");
let app = express();
let books = require("./controller/bookController");
const bodyParser = require("body-parser");

sequelize.sync();
app.use(bodyParser.json());

app.use("/books", books);

app.listen(3000, () => {
  console.log("App is listening on 3000.");
});

// app.use()
