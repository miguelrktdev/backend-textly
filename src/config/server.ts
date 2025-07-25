import dotenv from 'dotenv'

dotenv.config()

const { PORT, DATABASE_URL } = process.env

export const config = {
    PORT,
    DATABASE_URL,
}
