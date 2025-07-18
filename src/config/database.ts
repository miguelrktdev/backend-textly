import mongoose from 'mongoose'
import serverConfig from './serverConfig.ts'

const handleConnectDatabase = async () => {
    try {
        if (!serverConfig.DATABASE_URL) {
            throw new Error(
                'Falha ao conectar ao banco de dados, fornaça uma string de conexão'
            )
        }
        await mongoose.connect(serverConfig.DATABASE_URL)
        console.log(`Conectado ao banco de dados ${mongoose.connection.name}`)
    } catch (error) {
        console.error(error)
    }
}

export default handleConnectDatabase
