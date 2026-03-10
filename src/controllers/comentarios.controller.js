import Comentario from '../models/Comentario.js';

/**
 * Obtener todos los comentarios
 */
export const getAllComentarios = async (req, res) => {
  try {
    const comentarios = await Comentario.find().sort({ createdAt: -1 });
    res.json(comentarios);
  } catch (error) {
    res.status(500).json({ 
      error: 'Error al obtener los comentarios',
      message: error.message 
    });
  }
};

/**
 * Crear un nuevo comentario
 */
export const createComentario = async (req, res) => {
  try {
    const { texto, autor, userId } = req.body;
    
    const nuevoComentario = new Comentario({
      texto,
      autor,
      userId
    });
    
    await nuevoComentario.save();
    res.status(201).json(nuevoComentario);
  } catch (error) {
    res.status(400).json({ 
      error: 'Error al crear el comentario',
      message: error.message 
    });
  }
};
