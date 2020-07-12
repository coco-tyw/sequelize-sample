import * as Dotenv from "dotenv"
import * as AppRootPath from "app-root-path"
import { Sequelize } from "sequelize"

Dotenv.config({path: AppRootPath.resolve('/.env.local')})

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
})

init()

console.log(process.env.DB_PASSWORD)

async function init() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
