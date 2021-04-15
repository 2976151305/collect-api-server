import { RouterContext } from '@koa/router'
import { ErrorCode } from '../comm/enum'
import Jwt from '../comm/Jwt'
import UserModel from '../model/UserModel'
import ToJson from '../utils/ToJson'

interface Data {
  account?: string
  password?: string
}

class UserRouter {
  /**
   * @swagger
   * /user/getList:
   *  get:
   *    summary: 获取用户列表
   *    description: 获取用户列表
   *    produces:
   *      - application/json
   *    tags:
   *      - user
   *    responses:
   *      200:
   *        description: 请求成功
   *        schema:
   *          $ref: '#/definitions/ApiResponse'
   */
  async getUsers(ctx: RouterContext) {
    try {
      const users = await UserModel.findAll()
      return ctx.body = ToJson(ErrorCode.SUCCESS, users)
    } catch (e) {
      return ctx.body = ToJson(ErrorCode.INTERNAL_SERVER_ERROR)
    }
  }
  /**
   * @swagger
   * /user/login:
   *  post:
   *    summary: 用户登录
   *    description: 用户登录
   *    produces:
   *      - application/json
   *    tags:
   *      - user
   *    responses:
   *      200:
   *        description: 请求成功
   *        schema:
   *          $ref: '#/definitions/ApiResponse'
   */
  async login(ctx: RouterContext) {
    // const { account, password } = JSON.stringify(ctx.request.body)
    // console.log(account, password, ctx.request.body)

    // if (!account || !password)
    //   return ctx.body = ToJson(ErrorCode.BAD_REQUEST, undefined, '账号或密码不能为空')

    // try {
    //   const user = await UserModel.findOne({
    //     where: { account, password },
    //     attributes: ['account', 'nickanme', 'phone', 'background', 'avatar', 'gender', 'email']
    //   })
      
    //   if (!user)
    //     return ctx.body = ToJson(ErrorCode.NOT_FOUND, undefined, '用户不存在或账号密码错误')

    //   const id = user.getDataValue('id')
    //   const phone = user.getDataValue('phone')
    //   const token = new Jwt().generateToken({ id, account, phone })
      
    //   return ctx.body = ToJson(ErrorCode.SUCCESS, { token, user: user.toJSON() })
    // } catch (e) {
    //   return ctx.body = ToJson(ErrorCode.INTERNAL_SERVER_ERROR)
    // }
  }
}

export default new UserRouter