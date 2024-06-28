import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { FooterComponent } from './components/footer/footer.component';

// 1. importar el componente que se va a usar y especificar que lo voy a usar
@Component({
  selector: 'app-root',
  standalone: true,
  // Acá se especifica las importaciones a usar
  imports: [RouterOutlet, NavegacionComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

// componente principal
export class AppComponent {

  // acá va la lógica general del proyecto
}