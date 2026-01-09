import type { Request, Response } from 'express'
import { users, type NewUser } from '../db/schema/users.ts'
import { hashPassword } from '../utils/password.ts'
import db from '../db/connection.ts'
import { generateToken } from '../utils/jwt.ts'

export const register = async (
  req: Request<any, any, NewUser>,
  res: Response
) => {
  try {
    const hashedPassword = await hashPassword(req.body.password)
    const [user] = await db
      .insert(users)
      .values({
        ...req.body,
        password: hashedPassword,
      })
      .returning({
        id: users.id,
        email: users.email,
        username: users.username,
        firstName: users.firstName,
        lastName: users.lastName,
        createdAt: users.createdAt,
      })

    const token = await generateToken({
      id: user.id,
      email: user.email,
      username: user.username,
    })

    res.status(201).json({ message: 'User created successfully', user, token })
  } catch (e) {
    console.error('Registration error:', e)
    res.status(500).json({ error: 'Failed to create user' })
  }
}

export const login = async (req: Request, res: Response) => {
  try {
  } catch (e) {
    console.error('Login error:', e)
    res.status(500).json({ error: 'Failed to login' })
  }
}
