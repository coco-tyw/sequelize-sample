require('dotenv').config({path: require('app-root-path').resolve('/.env.local')})

module.exports = {
  "development": {
    "database": "sequelizeORM",
    "host": "127.0.0.1",
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "dialect": "mysql"
  }
}
