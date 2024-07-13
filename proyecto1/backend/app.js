//1. importamos las dependencias y módulos que necesitamos
import express from 'express';
import dotenv from 'dotenv';
//Variables de entorno -> nos guardan informacion delicada
import connectionMongo from './config/db.js';
import productsRouter from './routes/products.routes.js';
import cors from 'cors'


//2.Configurar el uso de nuestro servidor y de nuestras variables de
const app = express(); //configuramos nuestro servidor
dotenv.config(); //configuramos nuestras variables de entorno
const port = process.env.PORT;

//conéctese a la base de datos
connectionMongo();

//middleware -> intemediario entre el servidor y las peticiones
//es para que se puedan leer y enviar datos en formato json
app.use(express.json());
app.use(cors());

//usamos las rutas
app.use('/', productsRouter);



//Prueba
// app.get('/',(req, res)=>{
//     res.send('HOLAAAAA, ESTO ES UNA PETICIÓN A MI SERVIDOR');
// });


//3. escuchar nuestro servidor (ejecutarlo)
app.listen(port, ()=>{
    console.log(`El servidor se está escuchando en: http://localhost:${port}`);
});