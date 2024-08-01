import mongoose from "mongoose";
// Importamos la superclase userModel, de donde vamos a heredar
import userModel from "./user.model.js";

const adminSchema = new mongoose.Schema({
    categoriaAdmin: {
        type: Boolean,
        required: true,
        default: true
    }
});

// mongoose -> método 'discriminator' -> permite crear un modelo admin usando otro modelo, user

export const adminModel = userModel.discriminator('Admin', adminSchema);