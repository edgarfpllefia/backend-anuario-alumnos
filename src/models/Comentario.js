import mongoose from 'mongoose';

const comentarioSchema = new mongoose.Schema({
  texto: {
    type: String,
    required: [true, 'El texto es obligatorio'],
    trim: true,
  },
  autor: {
    type: String,
    required: [true, 'El autor es obligatorio'],
    trim: true,
  },
  userId: {
    type: String,
    required: [true, 'El userId es obligatorio'],
  },
}, {
  timestamps: true,
});

const Comentario = mongoose.model('Comentario', comentarioSchema);

export default Comentario;
