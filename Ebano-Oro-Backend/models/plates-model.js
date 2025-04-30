import { getDb } from "../database/connection.js"; // Asumiendo que tenés una función para obtener la conexión

export async function getAllPlatos() {
  const db = getDb();
  const platos = await db.collection("Platos").find().toArray();
  return platos;
}

export async function getPlatosByCategoria(categoria) {
  const db = getDb();
  const platos = await db
    .collection("Platos")
    .find({ categoria }) // Asumiendo que tenés un campo "categoria" en tus documentos
    .toArray();
  return platos;
}
