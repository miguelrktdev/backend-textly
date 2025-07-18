import cors from 'cors'
import express from 'express'
import serverConfig from '@/config/serverConfig.ts'

const app = express()

app.use(
    cors({
        origin: process.env.CORS_ORIGIN || '*',
    })
)
app.use(express.json({ limit: '10kb' }))

app.get('/hello', (_req, res) => {
    res.json({
        message: 'Hello world',
    })
})

app.listen(serverConfig.PORT || 3333)

export default app
