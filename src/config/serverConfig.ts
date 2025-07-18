import dotenv from 'dotenv'

dotenv.config()

const { PORT, DATABASE_URL } = process.env

const serverConfig = {
    PORT,
    DATABASE_URL,
}

export default serverConfig
