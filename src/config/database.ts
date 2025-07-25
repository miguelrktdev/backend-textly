import mongoose from 'mongoose'
import { config } from './server.ts'

export const handleConnectDatabase = async () => {
    try {
        if (!config.DATABASE_URL) {
            throw new Error(
                'Falha ao conectar ao banco de dados, verifique a string de conexão'
            )
        }
        await mongoose.connect(config.DATABASE_URL)
        console.log('Conectado ao banco de dados')
    } catch (error) {
        console.error(error)
    }
}
