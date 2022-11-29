import express from "express";
import EstadioController from "../controllers/estadiosController.js";

const router = express.Router();

router
    .get("/estadios", EstadioController.listarEstadios)
    .get("/estadios/:id", EstadioController.listarEstadioPorId)
    .post("/estadios", EstadioController.cadastrarEstadio)
    .put("/estadios/:id", EstadioController.atualizarEstadio)
    .delete("/estadios/:id", EstadioController.excluirEstadio)

export default router;