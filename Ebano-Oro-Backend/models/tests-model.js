import { getDb } from "../database/connection.js"; // Asumiendo que tenés una función para obtener la conexión

export async function getAllTests() {
  const db = getDb();
  const tests = await db.collection("Testimonios").find().toArray();
  return tests;
}