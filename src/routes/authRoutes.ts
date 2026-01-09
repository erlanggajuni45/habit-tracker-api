import { Router } from 'express'
import { validateBody } from '../middleware/validation.ts'
import { createUserSchema } from '../db/schema/users.ts'
import { register } from '../controllers/authController.ts'

const authRoutes = Router()

authRoutes.post('/register', validateBody(createUserSchema), register)

authRoutes.post('/login', (req, res) => {
  res.status(201).json({ message: 'user logged in' })
})

export default authRoutes
