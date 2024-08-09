import { userModel } from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import { generateToken } from '../lib/jwt.js';

// Funcion para la validación de usuario y generación de token 
const loginService = async (req, res) => {
    //1. Verificamos en la DB las credenciales correo y contrasenia que ingresamos en el login
    const {email, password} = req.body;
    // buscamos en DB el correo
    const userFound = await userModel.findOne({
        correo: email
    });

    // Validación en caso que no se encuentre un usuario con ese email
    if(!userFound){
        return res.status(404).json({
            mensaje: 'Usuario no encontrado, registrese'
        });
    }

    // Comparar la contraseña dada por el usuario y la guardada en la DB
    const isValidPassword = await bcrypt.compare(password, userFound.contrasenia);

    // Validamos si la contraseña es correcta
    if(!isValidPassword){
        return res.status(404).json({
            mensaje:'Contraseña incorrecta'
        });
    }

    // Creamos el payload (info de usario)
    const payload = {
        id:userFound._id,
        name: userFound.nombreCompleto
    }

    // validar si el usuario es admin
    if(userFound.categoriaAdmin){
        payload.isAdmin= true;
    }

    // Generar el token
    const token = await generateToken(payload);

    // Si se inicio correctamente, con credenciales correctas y se creo token
    return res.status(200).json({
        estado :'200',
        mensaje: 'Inicio de sesión exitoso',
        tokenGenerado: token
    });
};