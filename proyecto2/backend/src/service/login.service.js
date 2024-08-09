import userModel from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import jwtUtils from '../lib/jwt.js'; // Importar el objeto con generateToken y verifyToken

// Función para la validación de usuario y generación de token
export const loginService = async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. Verificamos en la DB las credenciales correo y contraseña
        const userFound = await userModel.findOne({ correo: email });

        // Validación en caso de que no se encuentre un usuario con ese email
        if (!userFound) {
            return res.status(404).json({
                estado: '404',
                mensaje: 'Usuario no encontrado, registrese'
            });
        }

        // Comparar la contraseña dada por el usuario con la guardada en la DB
        const isValidPassword = await bcrypt.compare(password, userFound.contrasenia);

        // Validamos si la contraseña es correcta
        if (!isValidPassword) {
            return res.status(401).json({
                estado: '401',
                mensaje: 'Contraseña incorrecta'
            });
        }

        // Creamos el payload (info del usuario)
        const payload = {
            id: userFound._id,
            name: userFound.nombreCompleto
        };

        // Validar si el usuario es admin
        if (userFound.categoriaAdmin) {
            payload.isAdmin = true;
        }

        // Generar el token
        const token = await jwtUtils.generateToken(payload); // Usar el objeto para acceder a generateToken

        // Responder con el token generado
        return res.status(200).json({
            estado: '200',
            mensaje: 'Inicio de sesión exitoso',
            tokenGenerado: token
        });

    } catch (error) {
        return res.status(500).json({
            estado: '500',
            mensaje: 'Hubo un error al iniciar sesión',
            error: error.message || 'Error interno del servidor'
        });
    }
};
