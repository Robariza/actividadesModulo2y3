// inject -> permite hacer peticiones al backend o a un API
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  // injectamos la peticion a la base de datos desde angular
  httpClient = inject(HttpClient);

  // definición rutas de peticiones previamente comprobadas con Postman
  API_URL_GET = 'http://localhost:3000/obtenerProductos';
  API_URL_POST = 'http://localhost:3000/registrarProducto';
  API_URL_DELETE = 'http://localhost:3000/eliminarProducto';
  API_URL_PUT = 'http://localhost:3000/actualizarProducto';


  // Obtener datos
  getProducts(){
    // Hacemos la petición get
    return this.httpClient.get(this.API_URL_GET);
  };

  // Crear datos
  // Debemos pasar los parametros nombre, imagen y precio. Debemos indicar el tipo 
  postProducts(nombre:string, imagen:string, precio:number){
    const infoProducto = {
      nombre:nombre,
      imagen:imagen,
      precio:precio,
    };
    // Hacemos la petición post
    return this.httpClient.post(this.API_URL_POST, infoProducto);
  };

  // Modificar datos
  putProduct(nombre:string, imagen:string, precio:number, id:string){
    const infoProducto = {
      nombre:nombre,
      imagen:imagen,
      precio:precio,
    };
    // Hacemos la petición put indicando el id mediante una concatenacion
    return this.httpClient.put(`${this.API_URL_PUT}/${id}`, infoProducto);
  };

  // Eliminar datos
  deleteProduct(id:string){
    // Hacemos la petición delete
    return this.httpClient.delete(`${this.API_URL_DELETE}/${id}`);
  };
}