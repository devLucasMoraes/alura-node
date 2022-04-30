import express from "express";
import autorController from "../controllers/autoresController.js";

const router = express.Router()

router
    .get("/autores", autorController.listarArautores)
    .get("/autores/:id", autorController.ListarAutorPorId)
    .post("/autores", autorController.CadastrarAutor)
    .put("/autores/:id", autorController.atualizarAutor)
    .delete("/autores/:id", autorController.excluirAutor)


export default router