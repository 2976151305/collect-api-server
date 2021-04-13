import Koa from 'koa'
import router from './router'

const app = new Koa()

app.use(router.routes())

app.listen(3002)

console.log('listen \x1B[36mhttp://localhost:3002\x1B[39m')
console.log('listen \x1B[36mhttp://127.0.0.1:3002\x1B[39m')