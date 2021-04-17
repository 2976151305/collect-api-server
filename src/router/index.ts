import Router from '@koa/router'
import LinkRouter from './LinkRouter'
import UserFolderRouter from './UserFolderRouter'
import UserRouter from './UserRouter'

const router = new Router()

router.get('/user/getUserFolders/:userId', UserFolderRouter.getUserFolders)
router.get('/user/getList', UserRouter.getUsers)
router.post('/user/login', UserRouter.login)
router.post('/user/register', UserRouter.register)
router.post('/user/delete', UserRouter.delete)

router.get('/link/:id', LinkRouter.getLinkDetail)

export default router
