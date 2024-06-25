//1. Importamos los modulos o dependencias que necesitamos
import { productModel } from '../models/products.model.js';


//Prueba inicial de mis controladores

//Petición GET -> me muestra TODOS los productos
export const getProducts = async (req, res) => {
    //Manejo errores -> usted debe enviar una respuesta, vaya todo ok, o no
    try {

        //products = [] -> lenght === 0 -> no hay productos
        let products = await productModel.find();

        //validación en el caso de que no hayan productos
        if (products.length === 0) {
            //404 -> not found -> no se encontró lo que se estaba buscando
            return res.status(404).json({ message: 'no se encontraron productos' });
        }

        //200 -> todo ok
        return res.status(200).send(products);

    } catch (error) {
        //500 -> error inesperado en el servidor
        return res.status(500).json({ message: error.message });
    }
}


//Petición POST -> me crea los productos uno por uno
export const postProduct = async (req, res) => {
    //body -> contenido de mi petición -> los datos que tu le das para que se pueda crear el producto nuevo
    const { nombre, imagen, precio } = req.body;

    //validación de que se hayan ingresado todos los datos
    if (!nombre || !imagen || !precio) {
        return res.status(400).json({ message: 'Debe ingresar todos los campos requeridos, nombre, imagen y precio' });
    }

    try {
        const newProduct = await productModel.create(req.body);
        //201 -> se creo correctamente
        return res.status(201).json(newProduct);

    } catch (error) {
        //500 -> error inesperado en el servidor
        return res.status(500).json({ message: error.message });
    }


}

//Petición DELETE -> me elimina los productos por ID
export const deleteProductById = async (req, res) => {
    try {
        let idForDelete = req.params._id;
        let productDeleted = await productModel.findByIdAndDelete(idForDelete);

        //validación cuando no encontramos el producto solicitado
        if (!productDeleted) {
            return res.status(404).json({ message: 'Lo siento! no se encontró producto para borrar' });
        }

        return res.status(200).json({ msg: 'Producto eliminado correctamente' });
    } catch (error) {
        //500 -> error inesperado en el servidor
        return res.status(500).json({ message: error.message });
    }
}

//Petición PUT -> me actualiza los productos por ID
export const putProductById = async (req, res) => {
    try {
        //acceder a nuestro parámetro _id
        let idForUpdate = req.params._id;
        //acceder al cuerpo de nuestra petición
        //1. le indica el id, y luego el cuerpo de su petición
        let productUpdated = await productModel.findByIdAndUpdate(idForUpdate, req.body);

        //validación cuando no encontramos el producto solicitado
        if (!productUpdated) {
            return res.status(404).json({ message: 'Lo siento! no se encontró producto para modificar' });
        }

        return res.status(200).json({ message: 'Producto actualizado correctamente' });

    } catch (error) {
        //500 -> error inesperado en el servidor
        return res.status(500).json({ message: error.message });
    }
}