//1. importamos las dependencias y módulos que necesitamos
import express from 'express';
//Variables de entorno -> nos guardan informacion delicada
import dotenv from 'dotenv';
//conexion DB
import connectionMongo from './config/db.js';
import productsRouter from './routes/products.routes.js';


//2.Configurar el uso de nuestro servidor y de nuestras variables de
const app = express(); //configuramos nuestro servidor

//configuramos nuestras variables de entorno
dotenv.config(); 
const port = process.env.PORT;

//conéctese a la base de datos
connectionMongo();

//middleware -> intemediario entre el servidor y las peticiones
//es para que se puedan leer y enviar datos en formato json
app.use(express.json());

//usamos las rutas
app.use('/', productsRouter);


//Petición de prueba
// app.get('/',(req, res)=>{ // app(servidor).get(petición) ('/', ()=>) (ruta raiz, función flecha) req/res (petición y respuesta)
//     res.send('Hola, esto es una petición del servidor'); (enviar una respuesta)
// });


//3. escuchar nuestro servidor (ejecutarlo)
app.listen(port, ()=>{
    console.log(`El servidor se está escuchando en: http://localhost:${port}`);
});