import jwt from 'jsonwebtoken'

interface User {
  id: number
  account: string
  phone: number
}

const screct = 'collect'

class Jwt {
  // 生成token
  generateToken(data: User): string {
    const token = jwt.sign(data, screct, { expiresIn: 10 })
    return token
  }

  // 校验token
  verifyToken(token: string) {
    try {
      const valid = jwt.verify(token, screct)
      return valid
    } catch (e) {
      return false
    }
  }
}

export default Jwt