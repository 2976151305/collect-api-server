import UserFolder from '../model/UserFolder'
import { RouterContext } from '@koa/router'

export default {
  getFolders: async (ctx: RouterContext) => {
    try {
      const folders = await UserFolder.findAll()
      return ctx.body = {
        code: 200,
        data: folders,
        msg: '操作成功'
      }
    } catch (e) {
      return ctx.body = {
        code: 500,
        data: null,
        msg: '服务端错误，请联系开发人员'
      }
    }
  }
}