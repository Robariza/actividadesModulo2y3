// importar dependencias
import { jwt } from "jsonwebtoken";

// configuramos una clave secreta
const secretKey = process.env.JWT_SECRET;

// Estructurar funciones para generar y verificar jwt

// Generar token
function generateToken(payload){
    // promesas -> información que debemos esperar
    // configuramos generateToken como asincrónica
    return new Promise((resolve, reject)=>{
        // Generamos token -> necesitamos payload, clave secreta, tiempo de expiración
        // Indicamos try-catch
        jwt.sign(payload, secretKey, {expiresIn:'1h'}, (token, error)=>{
            // validamos si hay error al generar el token
            if(error){
                // Indicamos lo que sucede si sale mal
                reject(new Error('Error al generar JWT', message.error))
            }else{
                // Indicamos lo que sucede si sale bien
                resolve(token);
            }
        });
    });
};

// Verificar token
function verifyToken(){
    return new Promise((resolve, reject)=>{
        jwt.verify(token, secretKey, (decoded, error)=>{
            // validamos decodificación
            if(error){
                // Indicamos lo que sucede si sale mal
                reject(new Error('Error al decodificar JWT', message.error))
            }else{
                // Indicamos lo que sucede si sale bien
                resolve(decoded);
            }
        });
    });
};

export default {generateToken, verifyToken};