 // Conexión base de datos (MONGODB) -> acá nstalamos las dependencias necesarias.
// mongoose -> dependecia que permite interactuar con MDB mas facil -> terminal: npm i mongoose (instalación dependencia)
import mongoose from 'mongoose' 

// Esta función contiene la lógica para la conexión con la base de datos del proyecto
const connectionMongo = async () => {
    // cuando trabajamos con una funcion async esperamos una respuesta, esperamos con await, en este caso esperamos la conexion con la DB
    // conexion base de datos con mongoose.connect(indicamos la base de datos usando la variable en .env y usamos {} para indicar el uso de la configuración por defecto)
    await mongoose.connect(process.env.CONEXION_DB,{});

    // control de errores -> try-catch
    try{
        console.log('Conexión exitosa con la base de datos');
    }catch(error){
        console.error('Error de conexión: ', error.message); // (concatenación) -> Da un mensaje de error e indica cual fue el error
    }
}

// modulo que vamos a impotar, en este caso connectionMongo
export default connectionMongo;
