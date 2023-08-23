const dotenv = require('dotenv');

dotenv.config();

const config = {
  app: {
    host: process.env.APP_HOST,
    port: process.env.APP_PORT,
  },
  postgres: {
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    database: process.env.DBNAME,
    username: process.env.DBUSERNAME,
    password: process.env.DBPASSWORD,
  },
  jwtToken: {
    accessToken: {
      key: process.env.ACCESS_TOKEN_KEY,
      expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN ?? 3600,
    },
    refreshToken: {
      key: process.env.REFRESH_TOKEN_KEY,
      expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN ?? 36000,
    },
  },
};

module.exports = { config };
