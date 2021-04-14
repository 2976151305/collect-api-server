import { ErrorCode } from '../comm/enum'

class ToJson<T> {
  output(code: ErrorCode, data?: T, msg?: string) {
    let defaultMsg: string = ''

    if (code === ErrorCode.SUCCESS) defaultMsg = '操作成功'
    if (code === ErrorCode.INTERNAL_SERVER_ERROR) defaultMsg = '服务器内部错误，请联系开发人员检查'

    return {
      code,
      data,
      msg: msg || defaultMsg
    }
  }
}

export default new ToJson().output