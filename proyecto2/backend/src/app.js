// 1.Importar dependencias y módulos

// EXPRESS
import express from 'express';
// DOTENV
import dotenv from 'dotenv';
// CORS
import cors from 'cors';

// 2.Hacemos la configuración 

//Dependencias 
// EXPRESS (servidor)
const app = express();
// DOTENV
dotenv.config();

// Middlewears -> Intermediarios 
// CORS
app.use(cors());

// 3.Escuchar server para ejecutar el app
const port = 6000;

app.listen(port, ()=>{
    console.log('El servidor se está ejecutando correctamente')
});