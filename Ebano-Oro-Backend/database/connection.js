import {MongoClient} from 'mongodb';

const getConnection = async () => {
    try {
        const mongoUrl = "mongodb://localhost:27017/ebano-oro";
        const client = await MongoClient.connect(mongoUrl);
        return client.db();
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        throw error;
    }}

export default getConnection;