import Router from '@koa/router'
import UserFolderRouter from './UserFolderRouter'
import UserRouter from './UserRouter'

const router = new Router()

/**
 * @openapi
 * /:
 *  get:
 *    description: 获取用户收藏文件夹
 */
router.get('/user/getUserFolder/:userId', UserFolderRouter.getUserFolders)
/**
 * @openapi
 * /:
 *  get:
 *    description: 获取用户列表
 */
router.get('/user/get', UserRouter.getUsers)

export default router
