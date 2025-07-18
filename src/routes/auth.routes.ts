import express from 'express'
import AuthController from '@/controllers/auth.controller.ts'

const routes = express.Router()

routes.get('/login', AuthController.login)
routes.get('/register', AuthController.register)

export default routes
