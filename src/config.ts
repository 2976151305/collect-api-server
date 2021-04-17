const path = require('path')

export const port = 9560

export default {
  db: {
    HOST: 'localhost',
    USERNAME: 'root',
    PASSWORD: 'root',
    DATABASE: 'collect',
    PORT: 3306
  },
  swaggerDefOpts: {
    title: 'swagger',
    oauthOptions: {},
    swaggerOptions: {
      url: `http://127.0.0.1:${port}/swagger.json`,
      // url: 'http://petstore.swagger.io/v2/swagger.json',
      supportedSubmitMethods: ['get', 'post', 'put', 'delete', 'patch'],
      docExpansion: 'none',
      jsonEditor: true,
      defaultModelRendering: 'schema',
      showRequestHeaders: true,
      swaggerVersion: '1.0.0',
      validatorUrl: null,
    },
    routePrefix: '/docs',
    specPrefix: '/docs/spec',
    exposeSpec: true,
    hideTopbar: false
  },
  swaggerJsdocOpts: {
    swaggerDefinition: {
      info: {
        title: '采集网站API文档',
        version: 'v1.0.0',
        description: '采集网站API文档1.0',
      },
      host: `127.0.0.1:${port}`,
      basePath: '/',
      tags: [{
        name: 'user',
        description: '用户相关接口'
      }, {
        name: 'link',
        description: '链接相关接口'
      }],
      schemes: ['http', 'https'],
      securityDefinitions: {
        Authorization: {
          type: 'apiKey',
          name: '用户校验JWT',
          in: 'header'
        }
      },
      definitions: {
        ApiResponse: {
          type: 'object',
          properties: {
            code: {
              type: 'integer',
              enum: [200],
              description: '返回码'
            },
            data: {
              type: 'object',
              description: '返回结果'
            },
            msg: {
              type: 'string',
              enum: ['请求成功'],
              description: '返回信息'
            }
          }
        },
        User: {
          type: 'object',
          properties: {
            account: {
              type: 'string',
              description: '账号'
            },
            password: {
              type: 'string',
              description: '密码'
            },
            email: {
              type: 'string',
              description: '邮箱'
            },
            gender: {
              type: 'integer',
              description: '性别'
            },
            phone: {
              type: 'string',
              description: '手机号'
            },
            avatar: {
              type: 'string',
              description: '用户头像'
            },
            nickname: {
              type: 'string',
              description: '用户昵称'
            }
          }
        }
      }
    },
    apis: [path.join(__dirname, './router/*.ts')]
  }
}