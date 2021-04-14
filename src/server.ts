import Koa from 'koa'
import router from './router'
import { koaSwagger } from 'koa2-swagger-ui'
import config, { port } from './config'
import swaggerJsdoc from 'swagger-jsdoc'

const app = new Koa()

app.use(router.routes())
app.use(koaSwagger(config.swaggerDefOpts))

router.get('/swagger.json', async ctx => {
  ctx.set('Content-Type', 'application/json')
  ctx.body = swaggerJsdoc(config.swaggerJsdocOpts)
})

app.listen(port)

console.log(`listen \x1B[36mhttp://localhost:${port}\x1B[39m`)
console.log(`listen \x1B[36mhttp://127.0.0.1:${port}\x1B[39m`)