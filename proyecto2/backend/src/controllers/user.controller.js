import bcrypt from 'bcryptjs';
import userModel from '../models/user.model.js';

// Crear usuario
export const postUser = async (request, response) => {
    try {
        const { nombreCompleto, correo, contrasenia } = request.body;
        const codedPasswordUser = await bcrypt.hash(contrasenia, 10);

        const newUser = await userModel.create({
            nombreCompleto,
            correo,
            contrasenia: codedPasswordUser
        });

        return response.status(201).json({
            estado: '201',
            mensaje: 'Usuario creado correctamente',
            datos: newUser
        });
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        return response.status(500).json({
            estado: '500',
            mensaje: 'Ocurrió un problema al crear un usuario'
        });
    }
};

// Mostrar todos los usuarios
export const getUsers = async (request, response) => {
    try {
        const allUsers = await userModel.find();

        if (allUsers.length === 0) {
            return response.status(200).json({
                estado: '200',
                mensaje: 'No se encontraron usuarios en la base de datos',
                datos: null
            });
        }

        return response.status(200).json({
            estado: '200',
            mensaje: 'Estos son todos los usuarios encontrados',
            cantidadUsuarios: allUsers.length,
            usuarios: allUsers
        });
    } catch (error) {
        console.error('Error al buscar los usuarios:', error);
        return response.status(500).json({
            estado: '500',
            mensaje: 'Ocurrió un problema al buscar los usuarios'
        });
    }
};

// Mostrar un solo usuario
export const getUserById = async (request, response) => {
    try {
        const idForGet = request.params.id;

        const userById = await userModel.findById(idForGet);

        if (!userById) {
            return response.status(404).json({
                estado: '404',
                mensaje: 'No se encontró el usuario'
            });
        }

        return response.status(200).json({
            estado: '200',
            mensaje: 'Usuario encontrado',
            usuario: userById
        });
    } catch (error) {
        console.error('Error al buscar el usuario:', error);
        return response.status(500).json({
            estado: '500',
            mensaje: 'Ocurrió un problema al buscar el usuario'
        });
    }
};

// Actualizar usuario
export const putUserById = async (request, response) => {
    try {
        const idForPut = request.params.id;
        const dataForUpdate = request.body;

        const userUpdated = await userModel.findByIdAndUpdate(idForPut, dataForUpdate, { new: true });

        if (!userUpdated) {
            return response.status(404).json({
                estado: '404',
                mensaje: 'Usuario no encontrado'
            });
        }

        return response.status(200).json({
            estado: '200',
            mensaje: 'Usuario actualizado correctamente',
            datos: userUpdated
        });
    } catch (error) {
        console.error('Error al actualizar el usuario:', error);
        return response.status(500).json({
            estado: '500',
            mensaje: 'Ocurrió un problema al actualizar el usuario'
        });
    }
};

// Eliminar usuario
export const deleteUserById = async (request, response) => {
    try {
        const idForDelete = request.params.id;

        const userDeleted = await userModel.findByIdAndDelete(idForDelete);

        if (!userDeleted) {
            return response.status(404).json({
                estado: '404',
                mensaje: 'Usuario no encontrado'
            });
        }

        return response.status(204).json(); // No content
    } catch (error) {
        console.error('Error al eliminar el usuario:', error);
        return response.status(500).json({
            estado: '500',
            mensaje: 'Ocurrió un problema al eliminar el usuario'
        });
    }
};
