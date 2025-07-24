import cors from 'cors'
import express from 'express'
import { config } from '@/config/server.ts'

const app = express()

app.use(cors())
app.use(express.json())

const port = config.PORT || 3333

const handleInit = () => {
  try {
    app.listen(port, () => {
      console.log(`Server running on PORT: ${port}`)
    })
  } catch (error) {
    console.error(error)
  }
}

handleInit()
