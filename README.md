# 采集网站接口服务

## 数据库选择MySQL8

## 项目依赖安装
```
// 安装nodemon监听文件变化
npm i -g nodemon

// 安装ts-node对ts文件进行编译
npm i -g ts-node

// 安装项目依赖
npm i
```

## 项目运行

```
nodemon ./src/server.ts
```

## 项目访问
```
// 访问项目地址
http://localhost:9560/
http://127.0.0.1:9560/

// 访问Swagger-UI文档
http://localhost:9560/docs
http://127.0.0.1:9560/docs
```

## 引入的依赖

- koa
- @koa/router
- sequelize
- koa2-swagger-ui
- swagger-jsdoc
- jsonwebtoken