import { getAllPlatos, getPlatosByCategoria } from "../models/plates-model.js";

export async function obtenerTodosLosPlatos(req, res) {
  try {
    const platos = await getAllPlatos();
    res.status(200).json(platos);
  } catch (error) {
    console.error("Error al obtener todos los platos:", error.message);
    res.status(500).json({ error: "Error al obtener los platos" });
  }
}

export async function obtenerPlatosPorCategoria(req, res) {
  const { categoria } = req.params;

  try {
    const platos = await getPlatosByCategoria(categoria);

    if (!platos || platos.length === 0) {
      return res.status(404).json({ error: `No se encontraron platos en la categoría: ${categoria}` });
    }

    res.status(200).json(platos);
  } catch (error) {
    console.error("Error al obtener los platos por categoría:", error.message);
    res.status(500).json({ error: "Error al obtener la categoría" });
  }
}
