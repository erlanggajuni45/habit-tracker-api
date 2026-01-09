import { createSecretKey } from 'crypto'
import env from '../../env.ts'
import { SignJWT, type JWTPayload } from 'jose'

export interface JwtPayload {
  id: string
  email: string
  username: string
}

export const generateToken = (payload: JwtPayload): Promise<string> => {
  const secret = env.JWT_SECRET
  const secretKey = createSecretKey(secret, 'utf-8')

  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(env.JWT_EXPIRES_IN || '7d')
    .sign(secretKey)
}
