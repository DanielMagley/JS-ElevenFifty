const Sequelize = require("sequelize");

const sequelize = new Sequelize("workoutlog", "postgres", "Postgres2035!", {
  host: "localhost",
  dialect: "postgres"
});

sequelize.authenticate().then(
  function() {
    console.log("Connected to workoutlog postgres DB");
  },
  function(err) {
    console.log(err);
  }
);

module.exports = sequelize;
