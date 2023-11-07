import { Response, NextFunction } from 'express'
import { verifyToken } from '../utils/jwt.handle'
import { JwtPayload } from 'jsonwebtoken'
import { RequestExt } from '../interfaces/req-ext.interface'

const checkSession = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || ''
    const jwt = jwtByUser?.split(' ').pop()
    const isUser = verifyToken(`${jwt}`) as JwtPayload
    if (!isUser) {
      res.status(401).send('NO_AUTHORIZATION')
    } else {
      req.user = isUser
      next()
    }
  } catch (e) {
    res.status(400).send('SESSION_NO_VALIDA')
  }
}

export { checkSession }
