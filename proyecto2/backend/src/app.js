// 1. Importar dependencias y módulos
// EXPRESS
import express from 'express';
// DOTENV
import dotenv from 'dotenv';
// CORS
import cors from 'cors';
// CONEXIÓN MONGODB
import connectionMongo from './config/db.js';

// 2. Hacemos la configuración 

// Dependencias 
// EXPRESS (servidor)
const app = express();
// DOTENV
dotenv.config();

// Middlewares -> Intermediarios 
// CORS
app.use(cors());

// 3. Escuchar server para ejecutar el app

// Condicional ternario -> variable = condicion ? 'condicion' true : 'condicion' false
const port = process.env.PORT ? process.env.PORT : 6000;

// Conexión base de datos
connectionMongo();

app.listen(port, () => {
    console.log('El servidor se está ejecutando correctamente en el puerto :' + port);
});