import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  // Esto se usa en html para poder usar el componente
  selector: 'app-navegacion',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'
})

// esta clase se importa
export class NavegacionComponent {

}
