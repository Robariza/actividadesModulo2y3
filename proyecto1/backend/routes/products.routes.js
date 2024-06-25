//Importaciones
import express from 'express';
//importamos nuestros controladores
import { getProducts, postProduct, deleteProductById, putProductById } from '../controllers/products.controllers.js';


//configuramos el Router de express
const productsRouter = express.Router();


//Definimos nuestras rutas

//Ruta para la petición GET
//primero, determino la ruta, y luego le digo qué es lo que tiene que hacer
productsRouter.get('/obtenerProductos',getProducts);

//Ruta para la petición POST
productsRouter.post('/registrarProducto', postProduct);

//Ruta para la petición DELETE
productsRouter.delete('/eliminarProducto/:_id', deleteProductById);

//Ruta para la petición PUT
productsRouter.put('/actualizarProducto/:_id', putProductById);

//Exportamos rutas
export default productsRouter;