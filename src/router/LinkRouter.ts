import { RouterContext } from '@koa/router'
import { ErrorCode } from '../comm/enum'
import UserModel from '../model/UserModel'
import ToJson from '../utils/ToJson'

class FolderRouter {
  // 获取文件夹下的所有文件
  async getUsers(ctx: RouterContext) {
    try {
      const users = await UserModel.findAll()
      return ctx.body = ToJson(ErrorCode.SUCCESS, users)
    } catch (e) {
      return ctx.body = ToJson(ErrorCode.INTERNAL_SERVER_ERROR)
    }
  }
}

export default new FolderRouter