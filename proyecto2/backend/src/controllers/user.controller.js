import userModel from '../models/user.model.js';

// Petición POST para crear usuarios -> función (declarada, flecha)
export const postUser = async (req, res) => {
    return res.send('Funciona la petición POST de los usuarios');
};

// Mostrar todos los usuarios
export const getUsers = async (req, res) => {
    return res.send('Funciona la petición GET de los usuarios');
};

// Mostrar un solo usuario
export const getUserById = async (req, res) => {
    return res.send('Funciona la petición GET del usuario');
};

// Actualizar usuario
export const putUserById = async (req, res) => {
    return res.send('Funciona la petición PUT del usuario');
};

// Eliminar usuario
export const deletetUserById = async (req, res) => {
    return res.send('Funciona la petición DELETE del usuario');
};
