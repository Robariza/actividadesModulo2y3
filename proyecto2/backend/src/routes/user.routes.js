// Express -> Router() -> permite crear las rutas (endpoints o puntos de entrada)
import Router from 'express';
import { deleteUserById, getUserById, getUsers, postUser, putUserById } from '../controllers/user.controller.js';
import auth from '../middlewares/aut.js';

const userRouter = Router();

// Ruta para mostrar usuario por ID
userRouter.get('/:id', getUserById);
// Ruta para obtener todos los usuarios
userRouter.get('/', auth(), getUsers);
// Ruta para crear usuario
userRouter.post('/', postUser);
// Ruta para actualizar usuario por ID
userRouter.put('/:id',auth(), putUserById);
// Ruta para eliminar por ID
userRouter.delete('/:id',auth(), deleteUserById);

export default userRouter;
