import express from "express";
import livroController from "../controllers/livrosController.js";

const router = express.Router()

router
    .get("/livros", livroController.listarLivros)
    .post("/livros", livroController.CadastrarLivros)


export default router