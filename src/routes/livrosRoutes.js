import express from "express";
import livroController from "../controllers/livrosController.js";

const router = express.Router()

router
    .get("/livros", livroController.listarLivros)
    .get("/livros/busca", livroController.listarLivrosPorEditora)
    .get("/livros/:id", livroController.ListarLivroPorId)
    .post("/livros", livroController.CadastrarLivros)
    .put("/livros/:id", livroController.atualizarLivro)
    .delete("/livros/:id", livroController.excluirLivro)


export default router