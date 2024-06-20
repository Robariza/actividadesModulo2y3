// 1. Importar dependecias y modulos que necesitamos
import express from 'express';
import dotenv from 'dotenv';
// Variables de entorno -> guardan información delicada

// 2. Configurar el uso del servidor (Express) y las variables de entorno (dotenv)

const app = express(); // configuración del servidor
dotenv.config(); //Configuración de las varibles de entorno
const port = process.env.PORT; //Variable de entorno port

// 3. Ejecutar el servidor (escuchar servidor)
app.listen(port, ()=>{
    console.log(`El servidor se está escuchando en: http://localhost:$(port)`);
});