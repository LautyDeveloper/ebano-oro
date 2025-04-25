import { Router } from "express";
import { obtenerTodosLosTests } from "../controllers/tests-controller.js";

const router = Router();

router.get("/", obtenerTodosLosTests);

export default router;
