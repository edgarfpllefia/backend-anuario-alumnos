import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

async function limpiarDB() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Conectado a MongoDB');
    
    // Borrar TODOS los documentos de la colección alumnos
    const result = await mongoose.connection.db.collection('alumnos').deleteMany({});
    
    console.log(`🗑️ Eliminados ${result.deletedCount} documentos`);
    console.log('✅ Base de datos limpia');
    
    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

limpiarDB();
