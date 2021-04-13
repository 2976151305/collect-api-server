import { DataTypes, Model } from 'sequelize'
import sequelize from '../conn'
import { Status } from '../comm/enum'

class UserFolder extends Model {}

UserFolder.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    comment: '用户ID'
  },
  name: {
    type: DataTypes.STRING(50),
    comment: '文件夹名称'
  },
  create_time: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  update_time: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  status: {
    type: DataTypes.INTEGER,
    defaultValue: Status.ENABLE,
    comment: '状态'
  },
  is_del: {
    type: DataTypes.BOOLEAN,
    comment: '假删除状态'
  }
}, {
  sequelize,
  timestamps: false,
  tableName: 'user_folder'
})

export default UserFolder