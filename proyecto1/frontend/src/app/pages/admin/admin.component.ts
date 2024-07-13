import { Component, OnInit} from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})

export class AdminComponent implements OnInit {
  allProducts: any[] = []; 

  isAdding: boolean = false;
  isUpdating: boolean = false;

  nombre: string = '';
  imagen: string = '';
  precio: number = 0;
  productIdToUpdate: string = '';

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this.productsService.getProducts().subscribe(
      (res: any) => {
        if (res) {
          console.log(res);
          this.allProducts = res;
        } else {
          console.error('Hubo un error al obtener productos');
        }
      },
      (error) => {
        console.error('Error al obtener productos:', error);
      }
    );
  }

  agregarProducto() {
    this.isAdding = true;

    this.productsService.postProducts(this.nombre, this.imagen, this.precio).subscribe(
      (res: any) => {
        if (res) {
          alert('Elemento agregado satisfactoriamente');
          this.isAdding = false;
          this.nombre = '';
          this.imagen = '';
          this.precio = 0;
          this.obtenerProductos();
        } else {
          console.error('Hubo un error al agregar el producto');
          this.isAdding = false;
        }
      },
      (error:any) => {
        console.error('Error al agregar producto:', error);
        this.isAdding = false;
      }
    );
  }

  eliminarProducto(id: string) {
    if (id) {
      this.productsService.deleteProduct(id).subscribe(
        (res: any) => {
          if (res) {
            alert('Producto eliminado satisfactoriamente');
            this.obtenerProductos();
          } else {
            console.error('Hubo un error al eliminar el producto');
          }
        },
        (error) => {
          console.error('Error al eliminar producto:', error);
        }
      );
    } else {
      console.error('ID es undefined');
    }
  }

  guardarProductoActualizar(producto: any) { // Cambio a tipo 'any' para el producto
    this.productIdToUpdate = producto._id;
    this.nombre = producto.nombre;
    this.imagen = producto.imagen;
    this.precio = producto.precio;
    this.isUpdating = true;
  }

  actualizarProducto() {
    if (this.productIdToUpdate) {
      this.productsService.putProduct(this.nombre, this.imagen, this.precio, this.productIdToUpdate).subscribe(
        (res: any) => {
          if (res) {
            alert('Elemento actualizado satisfactoriamente');
            this.isUpdating = false;
            this.nombre = '';
            this.imagen = '';
            this.precio = 0;
            this.productIdToUpdate = '';
            this.obtenerProductos();
          } else {
            console.error('Hubo un error al actualizar el producto');
            this.isUpdating = false;
          }
        },
        (error) => {
          console.error('Error al actualizar producto:', error);
          this.isUpdating = false;
        }
      );
    } else {
      console.error('ID es undefined');
    }
  }

  cancelarActualizacion() {
    this.isUpdating = false;
    this.nombre = '';
    this.imagen = '';
    this.precio = 0;
    this.productIdToUpdate = '';
  }
}
