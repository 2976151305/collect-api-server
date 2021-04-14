const path = require('path')

export const port = 9560

export default {
  db: {
    HOST: 'localhost',
    USERNAME: 'root',
    PASSWORD: 'password',
    DATABASE: 'collect',
    PORT: 3306
  },
  swaggerDefOpts: {
    title: 'swagger', // page title
    oauthOptions: {}, // passed to initOAuth
    swaggerOptions: { // passed to SwaggerUi()
      url: `http://127.0.0.1:${port}/swagger.json`, // link to swagger.json
      supportedSubmitMethods: ['get', 'post', 'put', 'delete', 'patch'],
      docExpansion: 'none',
      jsonEditor: true,
      defaultModelRendering: 'schema',
      showRequestHeaders: true,
      swaggerVersion: '1.0.0', // read from package.json,
      validatorUrl: null, // disable swagger-ui validator
    },
    routePrefix: '/docs', // route where the view is returned
    specPrefix: '/docs/spec', // route where the spec is returned
    exposeSpec: false, // expose spec file
    hideTopbar: false // hide swagger top bar
  },
  swaggerJsdocOpts: {
    swaggerDefinition: {
      info: {
        title: '采集网站API文档',
        version: '1.0.0',
        description: '采集网站API文档1.0',
      },
      host: `127.0.0.1:${port}`,
      basePath: '/',
    },
    apis: [path.join(__dirname, './router/*.ts')]
  }
}