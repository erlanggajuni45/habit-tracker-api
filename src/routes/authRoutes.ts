import { Router } from 'express'
import { validateBody } from '../middleware/validation.ts'
import { createUserSchema, loginUserSchema } from '../db/schema/users.ts'
import { login, register } from '../controllers/authController.ts'

const authRoutes = Router()

authRoutes.post('/register', validateBody(createUserSchema), register)

authRoutes.post('/login', validateBody(loginUserSchema), login)

export default authRoutes
