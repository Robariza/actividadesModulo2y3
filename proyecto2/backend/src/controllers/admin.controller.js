import adminModel from "../models/admin.model.js";
import bcrypt from 'bcryptjs';

// Petición Post para crear usuarios -> funcion (declarada, flecha)
export const postAdmin = async (request, response) => {
    try {
        const { nombreCompleto, correo, contrasenia } = request.body;

        // Verificar si el correo ya está en uso
        const existingAdmin = await adminModel.findOne({ correo });
        if (existingAdmin) {
            return response.status(400).json({
                estado: '400',
                mensaje: 'El correo ya está en uso',
                datos: null
            });
        }

        // Voy a tomar la contraseña del cuerpo de mi petición y la voy a encriptar
        // Yo le debo dar a bcrypt.hash() la contraseña del usuario y salt rounds
        // Salt Rounds -> nos define el nivel de encriptación, es un número -> 10 (nivel aceptable de seguridad sin comprometer rendimiento)
        const codedPassword = await bcrypt.hash(contrasenia, 10);

        // Crear el administrador con la contraseña encriptada
        const newAdmin = await adminModel.create({
            nombreCompleto,
            correo,
            contrasenia: codedPassword,
            categoriaAdmin: true
        });

        return response.status(201).json({
            estado: '201',
            mensaje: 'Administrador creado correctamente',
            datos: newAdmin
        });
    } catch (error) {
        // Proporcionar un mensaje de error más específico
        console.error('Error al crear administrador:', error); // Agregar consola para depuración
        return response.status(400).json({
            estado: '400',
            mensaje: 'Ocurrió un problema al crear un administrador',
            datos: error.message // Proporcionar un mensaje de error más específico
        });
    }
}

// Mostrar todos los administradores
export const getAdmin = async (request, response) => {
    try {
        // -> encontrar -> find()
        const allAdmins = await adminModel.find();

        // Validar si no hay administradores
        if (allAdmins.length === 0) {
            return response.status(200).json({
                estado: '200',
                mensaje: 'No se encontraron administradores en la base de datos',
                datos: null
            });
        }

        return response.status(200).json({
            estado: '200',
            mensaje: 'Estos son todos los administradores encontrados',
            cantidadAdmins: allAdmins.length,
            admins: allAdmins
        });
    } catch (error) {
        // Proporcionar un mensaje de error más específico
        console.error('Error al buscar administradores:', error); // Agregar consola para depuración
        return response.status(400).json({
            estado: '400',
            mensaje: 'Ocurrió un problema al buscar los administradores',
            datos: error.message // Proporcionar un mensaje de error más específico
        });
    }
}

// Eliminar administradores
export const deleteAdminById = async (request, response) => {
    const { id } = request.params;

    try {
        const admin = await adminModel.findByIdAndDelete(id);

        if (!admin) {
            return response.status(404).json({ mensaje: 'Administrador no encontrado' });
        }

        return response.status(200).json({ mensaje: 'Administrador eliminado exitosamente' });
    } catch (error) {
        // Proporcionar un mensaje de error más específico
        console.error('Error al eliminar administrador:', error); // Agregar consola para depuración
        return response.status(500).json({ mensaje: 'Error eliminando administrador', error: error.message });
    }
};
