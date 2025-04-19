import { Router } from "express";
import { obtenerPlatosPorCategoria, obtenerTodosLosPlatos } from "../controllers/plates-controller.js";

const router = Router();

router.get("/", obtenerTodosLosPlatos);
router.get("/:categoria", obtenerPlatosPorCategoria);


export default router;
