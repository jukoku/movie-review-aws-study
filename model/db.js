require('dotenv').config()
var Sequelize = require("sequelize");
var sequelize;

// new Sequelize('database', 'username', 'password',
sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: 3306,
  dialect: "mysql",
  timezone: "+09:00",
  define: {
    charset: "utf8",
    collate: "utf8_general_ci",
    timestamps: true,
    freezeTableName: true
  }
})

var db = {};

db.users = sequelize.import(__dirname + "/users.js")
db.reviews = sequelize.import(__dirname + "/reviews.js")

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;