import Router from '@koa/router'
import UserFolderRouter from './UserFolderRouter'
import UserRouter from './UserRouter'

const router = new Router()

router.get('/user/getUserFolder/:userId', UserFolderRouter.getUserFolders)
router.get('/user/get', UserRouter.getUsers)

export default router
