import bcrypt from 'bcrypt'
import env from '../../env.ts'

export const hashedPasswordd = async (password: string) => {
  return bcrypt.hash(password, env.BCRYPT_ROUNDS)
}
