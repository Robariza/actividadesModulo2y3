import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { NoEncontradoComponent } from './pages/no-encontrado/no-encontrado.component';

// 1. importar las paginas del aplicativo
// 2. definir la ruta de nuestras paginas
// 3. activar funcionamiento de rutas (app.components.html)
export const routes: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: 'productos', component: ProductosComponent},
    {path: '', redirectTo: '/inicio', pathMatch: 'full'},
    {path: '**', component : NoEncontradoComponent} // ** -> cualquier otra ruta no definida 
];
