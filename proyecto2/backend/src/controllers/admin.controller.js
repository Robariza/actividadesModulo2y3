// Crear, mostrar todos y eliminar
import adminModel from "../models/admin.model.js";

// Petición Post para crear usuarios -> funcion (declarada, flecha)
export const postAdmin = async (req, res) =>{
    return res.send('Funciona la petición POST de los admins');
};

// Mostrar todos los admin
export const getAdmin = async (req, res) =>{
    return res.send('Funciona la petición GET de los admins');
};

// Eliminar admin
export const deleteAdminById = async (req, res) =>{
    return res.send('Funciona la petición DELETE del admin');
};