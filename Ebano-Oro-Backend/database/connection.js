import { MongoClient } from "mongodb";

const mongoUrl = "mongodb://localhost:27017";
const dbName = "ebano-oro";

let db = null;

export const connectToDb = async () => {
  if (db) return db; // ya está conectada

  try {
    const client = await MongoClient.connect(mongoUrl);
    db = client.db(dbName);
    console.log("✅ Conectado a MongoDB");
    return db;
  } catch (error) {
    console.error("❌ Error al conectar a la base de datos:", error);
    throw error;
  }
};

export const getDb = () => {
  if (!db) {
    throw new Error("❌ La base de datos no está conectada todavía");
  }
  return db;
};
