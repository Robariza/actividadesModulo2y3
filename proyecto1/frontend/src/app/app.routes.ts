import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { IngresoComponent } from './pages/ingreso/ingreso.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { AdminComponent } from './pages/admin/admin.component';

export const routes: Routes = [
    {path:'inicio', component:InicioComponent},
    {path:'productos', component:ProductosComponent},
    {path:'ingreso',component:IngresoComponent},
    {path:'admin',component:AdminComponent},
    {path: '', redirectTo: '/inicio', pathMatch: 'full'}
];
