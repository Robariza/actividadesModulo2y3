import jwtUtils from '../lib/jwt.js';

// Middleware debe terner response, request, next como parametros
// const auth = (requiredRole, res, req, next) => {}

// Middleware para diferentes roles
const auth = (requiredRole)=>{
    return async (req,res,next)=>{
        // Validación de existencia del token
        let token = req.headers['authorization'];

        if(!token){
            return res.status(401).json({
                message: 'No se encontró token'
            });
        }

        // Indica que debe continuar con el siguiente intermediario o controlador
        next();
    }
}

export default auth;