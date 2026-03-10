import express from 'express';
import { getAllComentarios, createComentario } from '../controllers/comentarios.controller.js';

const router = express.Router();

// Ruta para obtener todos los comentarios
router.get('/', getAllComentarios);

// Ruta para crear un comentario
router.post('/', createComentario);

export default router;
