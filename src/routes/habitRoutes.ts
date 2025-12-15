import { Router } from 'express'

const habitRoutes = Router()

habitRoutes.get('/', (req, res) => {
  res.json({ message: 'habits' })
})

habitRoutes.get('/:id', (req, res) => {
  res.json({ message: 'got one habit' })
})

habitRoutes.post('/', (req, res) => {
  res.json({ message: 'created habit' }).status(201)
})

habitRoutes.delete('/:id', (req, res) => {
  res.json({ message: 'deleted habit' })
})

habitRoutes.post('/:id/complete', (req, res) => {
  res.json({ message: 'completed habit' }).status(201)
})

export default habitRoutes
