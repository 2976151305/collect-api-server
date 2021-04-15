import { RouterContext } from '@koa/router'
import { ErrorCode } from '../comm/enum'
import UserFolderModel from '../model/UserFolderModel'
import LinkModel from '../model/LinkModel'
import ToJson from '../utils/ToJson'

interface Folder {
  list: LinkModel[]
}

class UserFolderRouter {
  /**
   * @swagger
   * /user/getUserFolders/{userId}:
   *  get:
   *    summary: 获取用户文件夹
   *    description: 获取用户文件夹
   *    produces:
   *      - application/json
   *    tags:
   *      - user
   *    parameters:
   *      - name: userId
   *        in: path
   *        description: 用户ID
   *        required: true
   *    responses:
   *      200:
   *        description: 请求成功
   *        schema:
   *          $ref: '#/definitions/ApiResponse'
   */
  async getUserFolders(ctx: RouterContext) {
    try {
      const { userId } = ctx.params
      let data: Folder[] = []
      const userFolders = await UserFolderModel.findAll({
        where: { user_id: userId, is_del: 0, status: 1 }
      })
      for(let i = 0; i < userFolders.length; i++) {
        const folder_id = userFolders[i].getDataValue('id')
        const folderLinks = await LinkModel.findAll({
          where: { folder_id, status: 1, is_del: 0 }
        })
        data.push({
          ...userFolders[i].toJSON(),
          list: folderLinks
        })
      }

      return ctx.body = ToJson(ErrorCode.SUCCESS, data)
    } catch (e) {
      console.warn(e)
      return ctx.body = ToJson(ErrorCode.INTERNAL_SERVER_ERROR)
    }
  }
}

export default new UserFolderRouter