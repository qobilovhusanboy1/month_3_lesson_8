require("dotenv/config");

const {env} = process;

const config = {
  PORT: env.PORT,
  DB_URL: env.DB_URL,
  jwtSecretKey: env.JWT_SECRETKEY,
};

module.exports = config;