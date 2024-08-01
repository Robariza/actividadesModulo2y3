// 1. Importación de dependencias y módulos
import mongoose from 'mongoose';

// 2.Creamos el schema de datos
const userSchema = new mongoose.Schema({
    nombreCompleto:{
        type: String,
        required: true
    },
    correo:{
        type: String,
        required: true,
        unique: true
    },
    contrasenia:{
        type: String,
        required: true
    },
    imagen:{
        type: String
    }
});

// 3.Creamos y Exportamos el modelo usando mongoose, indicamos el nombre de la colección

const userModel = mongoose.model('usuario', userSchema);

export default userModel;