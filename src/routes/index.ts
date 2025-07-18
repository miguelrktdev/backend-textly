import express from 'express'
import authRoutes from '@/routes/auth.routes.ts'

const routes = express.Router()

routes.get('/hello', (_req, res) => {
    res.json({
        message: 'Hello world',
    })
})
routes.use('/auth', authRoutes)

export default routes
