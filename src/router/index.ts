import Router from '@koa/router'
import folder from './folder'

const router = new Router()

router.get('/folder', folder.getFolders)

export default router