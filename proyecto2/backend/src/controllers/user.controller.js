import userModel from '../models/user.model.js';

// Petición POST para crear usuarios -> función (declarada, flecha)
export const postUser = async (request, response) => {

    try {

        const {nombreCompleto, correo, contrasena} = request.body;
        const codedPasswordUser = await bcrypt.hash(contrasena, 10);

        const newUser = await userModel.create({
            nombreCompleto,
            correo,
            contrasena: codedPasswordUser
        });

        return response.status(201).json({
            estado: '201',
            mensaje: 'Usuario creado correctamente',
            datos: newUser
        })
    } catch (error) {
        return response.status(400).json({
            estado: '400',
            mensaje: 'Ocurrió un problema al crear un usuario',
            datos: error
        })
    }
}

// Mostrar todos los usuarios
export const getUsers = async (request, response) => {

    try {
        // -> encontrar -> find()
        const allUsers = await userModel.find();
        // validadr si no hay usuarios
        if (allUsers.length === 0) {
            return response.status(200).json({
                estado: '200',
                mensaje: 'No se encontraron usuarios en la base de datos',
                datos: null
            })
        }

        return response.status(200).json({
            estado: '200',
            mensaje: 'Estos son todos los usuarios encontrados',
            cantidadUsuarios: allUsers.length,
            usuarios: allUsers
        })

    } catch (e) {
        return response.status(400).json({
            estado: '400',
            mensaje: 'Ocurrió un problema al buscar los usuarios',
            datos: e
        })
    }
}

// Mostrar un solo usuario
export const getUserById = async (request, response) => {
    try {
        let idForGet = request.params.id
        // validar id
        if(idForGet === ':id' ){
            return response.json({
                mensaje: 'Debe ingresar un id válido',
                id: idForGet
            })
        }

        // -> encontrar -> find()
        const userById = await userModel.findById(idForGet);

        //validación cuando no se encuentra el usuario buscado
        if(!userById){
            return response.status(200).json({
                estado: '200',
                mensaje: "No se encontró ese usuario",
                dato: userById
            })
        }


        return response.status(200).json({
            estado: '200',
            mensaje: 'Se encontró el usuario buscado',
            usuario: userById
        })

    } catch (error) {
        return response.status(400).json({
            estado: '400',
            mensaje: 'Ocurrió un problema al buscar un solo usuario',
            datos: error,
        })
    }
}

// Actualizar usuario
export const putUserById = async (request, response) => {
    try {
        let idForPut = request.params.id
        const dataForUpdate = request.body
        const userUpdated = await userModel.findByIdAndUpdate(idForPut, dataForUpdate);

        return response.status(200).json({
            estado: '200',
            mensaje:'Se actualizó correctamente',
            datos: userUpdated
        })
        
    } catch (error) {
        return response.status(400).json({
            estado: '400',
            mensaje: 'Ocurrió un problema al actualizar usuario',
            datos: error,
        })
    }
}

//  Eliminar usuario
export const deleteUserById = async (request, response) => {
   try {
    let idForDelete = request.params.id
    const userDeleted = await userModel.findByIdAndDelete(idForDelete);

    return response.status(200).json({
        estado:'200',
        mensaje: 'Usuario eliminado Correctamente',
        datos: userDeleted
    })
   } catch (error) {
    return response.status(400).json({
        estado: '400',
        mensaje: 'Ocurrió un problema al eliminar usuario',
        datos: error,
    })
   }
}