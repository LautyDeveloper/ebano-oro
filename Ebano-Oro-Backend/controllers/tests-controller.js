import { getAllTests } from "../models/tests-model.js";

export async function obtenerTodosLosTests(req, res) {
  try {
    const tests = await getAllTests();
    res.json(tests);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los Testimonios" });
  }
}