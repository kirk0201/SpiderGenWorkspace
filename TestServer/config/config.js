const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  development: {
    username: process.env.config_username,
    password: process.env.config_pass,
    database: process.env.config_database,
    host: process.env.config_host,
    dialect: process.env.config_dialect,
  },
  test: {
    username: process.env.config_username,
    password: process.env.config_pass,
    database: process.env.config_database,
    host: process.env.config_host,
    dialect: process.env.config_dialect,
  },
  production: {
    username: process.env.config_username,
    password: process.env.config_pass,
    database: process.env.config_database,
    host: process.env.config_host,
    dialect: process.env.config_dialect,
  },
};
