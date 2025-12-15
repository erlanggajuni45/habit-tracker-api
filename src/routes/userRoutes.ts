import { Router } from 'express'

const userRoutes = Router()

userRoutes.get('/', (req, res) => {
  res.json({ message: 'users' }).status(200)
})

userRoutes.get('/:id', (req, res) => {
  res.json({ message: 'got user' })
})

userRoutes.put('/:id', (req, res) => {
  res.json({ message: 'user updated' })
})

userRoutes.delete('/:id', (req, res) => {
  res.json({ message: 'user deleted' })
})

export default userRoutes
