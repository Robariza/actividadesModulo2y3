import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productsService = inject(ProductsService);
  allProducts: any[] = [];

  // Obtenemos información para la petición get
  obtenerProductos() {
    console.log('hola')
    this.productsService.getProducts().subscribe((res: any) => {
      if (res) {
        console.log(res);
        this.allProducts = res;
      } else {
        console.error('Hubo un error');
      }
    });
  }

  // Método para renderizar los productos en la página
  ngOnInit() {
    this.obtenerProductos();
  }
}
