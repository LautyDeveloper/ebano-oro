import { getAllPlatos, getPlatosByCategoria } from "../models/plates-model.js";

export async function obtenerTodosLosPlatos(req, res) {
  try {
    const platos = await getAllPlatos();
    res.json(platos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los platos" });
  }
}

export async function obtenerPlatosPorCategoria(req, res) {
  const { categoria } = req.params;

  try {
    const platos = await getPlatosByCategoria(categoria);
    if (platos.length === 0) {
      return res.status(404).json({ error: "Categoría no encontrada" });
    }
    res.json(platos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la categoría" });
  }
}
