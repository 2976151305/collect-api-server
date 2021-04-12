import Koa from 'koa'
import Router from '@koa/router'
import UserFolder from './model/UserFolder'

const app = new Koa()
const router = new Router()

router.get('/', async ctx => {
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
})

app.use(router.routes())

app.listen(3000)
