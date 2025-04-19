import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const platosPath = path.join(__dirname, "../data/plates.json");

export async function getAllPlatos() {
  const data = await readFile(platosPath, "utf-8");
  return JSON.parse(data);
}

export async function getPlatosByCategoria(categoria) {
  const data = await getAllPlatos();
  return data[categoria] || [];
}
