import { DataTypes, Model } from 'sequelize'
import sequelize from '../conn'
import { Status } from '../comm/enum'

class Link extends Model {}

Link.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  folder_id: {
    type: DataTypes.INTEGER,
    comment: '所属文件夹ID'
  },
  title: {
    type: DataTypes.INTEGER,
    comment: '链接标题'
  },
  link: {
    type: DataTypes.STRING,
    comment: '链接地址'
  },
  description: {
    type: DataTypes.STRING,
    comment: '链接简介'
  },
  icon: {
    type: DataTypes.STRING,
    comment: '链接图标'
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
  tableName: 'link'
})

export default Link