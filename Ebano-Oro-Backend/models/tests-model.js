import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const testsPath = path.join(__dirname, "../mocks/tests.json");

export async function getAllTests() {
  const data = await readFile(testsPath, "utf-8");
  return JSON.parse(data);
}