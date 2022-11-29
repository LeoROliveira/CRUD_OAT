import express from "express";
import SelecaoController from "../controllers/selecoesController.js";

const router = express.Router();

router
    .get("/selecoes", SelecaoController.listarSelecoes)
    .get("/selecoes/:id", SelecaoController.listarSelecaoPorId)
    .post("/selecoes", SelecaoController.cadastrarSelecao)
    .put("/selecoes/:id", SelecaoController.atualizarSelecao)
    .delete("/selecoes/:id", SelecaoController.excluirSelecao)
    

export default router;