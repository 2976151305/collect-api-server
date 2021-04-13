// 状态
export const enum Status {
  DISABLE,
  ENABLE,
  AUDIT
}

// 性别
export const enum Gender {
  UNKNOW,
  MALE,
  FEMALE
}

// 返回状态码
export const enum ErrorCode {
  SUCCESS = 200, // 成功
  BAD_REQUEST = 400, // 请求语法错误
  INVALID_TOKEN = 403, // 用户校验错误
  INTERNAL_SERVER_ERROR = 500, // 服务器内部错误
  INVALID_EMAIL = 1001, // 无效邮箱
  INVALID_PHONE = 1002 // 无效手机号
}
