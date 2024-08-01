import mongoose from 'mongoose';
import userModel from './user.model.js';

// Definimos el esquema específico para admin
const adminSchema = new mongoose.Schema({
    categoriaAdmin: {
        type: Boolean,
        required: true,
        default: true
    }
});

// Usamos el método 'discriminator' de mongoose para crear el modelo admin basado en userModel
const adminModel = userModel.discriminator('Admin', adminSchema);

export default adminModel;
