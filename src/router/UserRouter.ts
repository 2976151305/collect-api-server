import { RouterContext } from '@koa/router'
import { ErrorCode, Gender } from '../comm/enum'
import Jwt from '../comm/Jwt'
import UserModel from '../model/UserModel'
import ToJson from '../utils/ToJson'
import md5 from 'md5'

interface User {
  account?: string
  password?: string
  nickname?: string
  phone?: string
  email?: string
  gender?: Gender
  avatar?: string
}

class UserRouter {
  private attributes: string[]
  private whereCondition: {}

  constructor() {
    this.attributes = ['account', 'nickanme', 'phone', 'background', 'avatar', 'gender', 'email']
    this.whereCondition = { status: 1, is_del: 0 }
  }
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
      return ctx.body = ToJson(ErrorCode.INTERNAL_SERVER_ERROR, e)
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
   *    parameters:
   *      - user: account
   *        desctiption: 账号
   *        in: body
   *        type: string
   *        required: true
   *      - name: password
   *        description: 密码
   *        in: body
   *        type: stirng
   *        required: true
   *    tags:
   *      - user
   *    responses:
   *      200:
   *        description: 请求成功
   *        schema:
   *          $ref: '#/definitions/ApiResponse'
   */
  async login(ctx: RouterContext) {
    const { account, password } = <User>JSON.stringify(ctx.request.body)
    console.log(account, password, ctx.request.body)

    if (!account || !password)
      return ctx.body = ToJson(ErrorCode.BAD_REQUEST, undefined, '账号或密码不能为空')

    try {
      const user = await UserModel.findOne({
        where: { account, password, ...this.whereCondition },
        attributes: this.attributes
      })
      
      if (!user)
        return ctx.body = ToJson(ErrorCode.NOT_FOUND, undefined, '用户不存在或账号密码错误')

      const id = user.getDataValue('id')
      const phone = user.getDataValue('phone')
      const token = new Jwt().generateToken({ id, account, phone })
      
      return ctx.body = ToJson(ErrorCode.SUCCESS, { token, user: user.toJSON() })
    } catch (e) {
      return ctx.body = ToJson(ErrorCode.INTERNAL_SERVER_ERROR, e)
    }
  }
  /**
   * @swagger
   * /user/register:
   *  post:
   *    summary: 用户注册
   *    description: 用户注册
   *    produces:
   *      - application/json
   *    parameters:
   *      - name: body
   *        in: body
   *        type: object
   *        required: true
   *        schema:
   *          $ref: '#/definitions/User'
   *    tags:
   *      - user
   *    responses:
   *      200:
   *        description: 请求成功
   *        schema:
   *          $ref: '#/definitions/ApiResponse'
   */
  async register(ctx: RouterContext) {
    const {
      account,
      password,
      nickname,
      email,
      phone,
      gender,
      avatar
    } = <User>ctx.request.body

    if (!account || !password || !nickname)
      return ctx.body = ToJson(ErrorCode.BAD_REQUEST, undefined, '必填信息不能为空')

    try {
      const user = await UserModel.findOne({ where: { account, is_del: 0 } })
      if (user)
        return ctx.body = ToJson(ErrorCode.REPEAT, undefined, '账号已存在')

      const newUser = await UserModel.create({
        account,
        password: md5(password),
        email,
        phone,
        gender,
        avatar
      })
      newUser.setAttributes(this.attributes).toJSON()
      return ctx.body = ToJson(ErrorCode.SUCCESS, newUser)
    } catch (e) {
      return ctx.body = ToJson(ErrorCode.INTERNAL_SERVER_ERROR, e)
    }
  }
  /**
   * @swagger
   * /user/delete/{userId}:
   *  delete:
   *    summary: 删除用户
   *    description: 删除用户
   *    produces:
   *      - application/json
   *    parameters:
   *      - name: userId
   *        in: path
   *        type: object
   *        required: true
   *    tags:
   *      - user
   *    responses:
   *      200:
   *        description: 请求成功
   *        schema:
   *          $ref: '#/definitions/ApiResponse'
   */
  async delete(ctx: RouterContext) {
    const { userId } = ctx.params
    try {
      await UserModel.update({ is_del: 1 }, {
        where: { id: userId }
      })
      return ctx.body = ToJson(ErrorCode.SUCCESS)
    } catch (e) {
      return ctx.body = ToJson(ErrorCode.INTERNAL_SERVER_ERROR, e)
    }
  }
}

export default new UserRouter