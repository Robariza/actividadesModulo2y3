// importar dependencias
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

// Configurar dotenv para cargar variables de entorno
dotenv.config();

// Obtener la clave secreta desde las variables de entorno
const secretKey = process.env.JWT_SECRET;

// Verificar que secretKey esté definida
if (!secretKey) {
    throw new Error('La clave secreta JWT no está definida en las variables de entorno');
}

// Función para generar un token
function generateToken(payload) {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, secretKey, { expiresIn: '1h' }, (error, token) => {
            if (error) {
                reject(new Error('Error al generar JWT: ' + error.message));
            } else {
                resolve(token);
            }
        });
    });
}

// Función para verificar un token
function verifyToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secretKey, (error, decoded) => {
            if (error) {
                reject(new Error('Error al decodificar JWT: ' + error.message));
            } else {
                resolve(decoded);
            }
        });
    });
}

// Exportar funciones
export default { generateToken, verifyToken };
