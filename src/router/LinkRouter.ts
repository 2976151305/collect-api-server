import { RouterContext } from '@koa/router'
import { ErrorCode } from '../comm/enum'
import LinkModel from '../model/LinkModel'
import ToJson from '../utils/ToJson'

class FolderRouter {
  /**
   * @swagger
   * /link/{id}:
   *  get:
   *    summary: 获取链接详情
   *    description: 获取链接详情
   *    produces:
   *      - application/json
   *    parameters:
   *      - name: id
   *        in: path
   *        description: 链接ID
   *        required: true
   *    tags:
   *      - link
   *    responses:
   *      200:
   *        description: 请求成功
   *        schema:
   *          $ref: '#/definitions/ApiResponse'
   */
  async getLinkDetail(ctx: RouterContext) {
    try {
      const { id } = ctx.params
      if (!id) {
        return ctx.body = ToJson(ErrorCode.BAD_REQUEST)
      }

      const link = await LinkModel.findOne({
        where: {
          id,
          status: 1,
          is_delete: 0
        }
      })

      if (link) return ctx.body = ToJson(ErrorCode.SUCCESS, link)
      else return ctx.body = ToJson(ErrorCode.NOT_FOUND, undefined, '数据不存在')
    } catch (e) {
      return ctx.body = ToJson(ErrorCode.INTERNAL_SERVER_ERROR, e)
    }
  }
  async addLink(ctx: RouterContext) {
    try {
      const { link, folderId } = ctx.params
    } catch (e) {
      return ctx.body = ToJson(ErrorCode.INTERNAL_SERVER_ERROR, e)
    }
  }
}

export default new FolderRouter