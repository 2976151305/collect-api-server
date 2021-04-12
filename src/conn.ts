import { Sequelize } from 'sequelize'

export default new Sequelize('collect', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
})
