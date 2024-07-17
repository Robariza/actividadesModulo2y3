import { Component } from '@angular/core';
// RouterLink permite la funcionalidad de enlace a las rutas por medio de routerlink
import { RouterLink } from '@angular/router';

@Component({
  // Esto se usa en html para poder usar el componente
  selector: 'app-navegacion',
  standalone: true,
  // Importamos el componente a usar
  imports: [RouterLink],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'
})

// esta clase se importa
export class NavegacionComponent {

}
