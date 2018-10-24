const Sequelize = require("sequelize");

const sequelize = new Sequelize("books-api", "postgres", "Postgres2035!", {
  host: "localhost",
  dialect: "postgres"
});
sequelize.authenticate().then(
  () => {
    console.log("Connected to project database");
  },
  err => console.log(err)
);

module.exports = sequelize;
