import Router from '@koa/router'
import UserFolderRouter from './UserFolderRouter'
import UserRouter from './UserRouter'

const router = new Router()

// 获取用户所有文件夹
router.get('/user/getUserFolder/:userId', UserFolderRouter.getUserFolders)
// 获取所有用户
router.get('/user/get', UserRouter.getUsers)

export default router
