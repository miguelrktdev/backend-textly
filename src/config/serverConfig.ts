import dotenv from 'dotenv'

dotenv.config()

const { PORT } = process.env

const serverConfig = {
    PORT,
}

export default serverConfig
