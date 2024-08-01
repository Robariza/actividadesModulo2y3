// 1. Importaciones
import mongoose from 'mongoose';

// función flecha -> const variable = async () => {}
// callback -> Ejecuta y devuelve algo 
// función declarativa
 async function connectionMongo() {
    await mongoose.connect(process.env.MONGODB_URI, {});

    try{
        console.log('Conexión exitosa a la base de datos');
    }catch(error){
        console.error('Error de conexión', error);
    }
};

export default connectionMongo;