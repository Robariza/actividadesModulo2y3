// Conexión base de datos (MONGODB) -> acá nstalamos las dependencias necesarias.
// mongoose -> dependecia que permite interactuar con MDB mas facil -> terminal: npm i mongoose (instalación dependencia)
import mongoose from 'mongoose'
import mogoose from 'mongoose'


const connectionMongo = async () => {
    // cuando trabajamos con una funcion async esperamos una respuesta
    // conexion base de datos
    await mongoose.connect(process.env.CONEXION_DB,{})
    // control de errores -> try-catch
    try{
        console.log('Conexión exitosa con la base de datos');
    }catch(error){
        console.error('Error de conexión: ', error.message) // (concatenación) -> Da un mensaje de error e indica cual fue el error
    }
}


// modulo que vamos a impotar, en este caso connectionMongo
export default connectionMongo;
