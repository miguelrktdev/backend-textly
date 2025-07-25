import cors from 'cors'
import express from 'express'
import { config } from '@/config/server.ts'
import { handleConnectDatabase } from './config/database.ts'

const app = express()

app.use(cors({ origin: '*' }))
app.use(express.json())

const port = config.PORT || 3333

const handleInit = async () => {
  try {
    await handleConnectDatabase()
    app.listen(port, () => {
      console.log(`Server running on PORT: ${port}`)
    })
  } catch (error) {
    console.error(error)
  }
}

handleInit()
