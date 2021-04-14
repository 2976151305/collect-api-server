import config from './config'
import { Sequelize } from 'sequelize'

const { DATABASE, USERNAME, PASSWORD, HOST, PORT } = config.db

export default new Sequelize(DATABASE, USERNAME, PASSWORD, {
  host: HOST,
  port: PORT,
  dialect: 'mysql'
})
