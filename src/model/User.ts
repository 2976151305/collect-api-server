import { DataTypes, Model } from 'sequelize'
import sequelize from '../conn'
import { Status, Gender } from '../comm/enum'

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  account: {
    type: DataTypes.STRING(30),
    allowNull: false,
    comment: '用户账号'
  },
  password: {
    type: DataTypes.STRING(50),
    allowNull: false,
    comment: '用户密码'
  },
  nickname: {
    type: DataTypes.STRING(20),
    comment: '用户昵称'
  },
  email: {
    type: DataTypes.STRING(30),
    comment: '用户邮箱'
  },
  phone: {
    type: DataTypes.INTEGER,
    comment: '手机号'
  },
  avatar: {
    type: DataTypes.STRING,
    comment: '用户头像'
  },
  gender: {
    type: DataTypes.INTEGER,
    defaultValue: Gender.UNKNOW,
    comment: '用户性别'
  },
  openid: {
    type: DataTypes.STRING,
    comment: '微信OPENID'
  },
  backgournd: {
    type: DataTypes.STRING,
    comment: '自定义背景'
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
  tableName: 'user'
})

export default User