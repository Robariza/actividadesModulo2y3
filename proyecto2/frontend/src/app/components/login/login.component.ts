import { Component, Input, input } from '@angular/core';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
// indicamos el uso de la función flecha ()=> y usamos VOID para indi car que la función no va a retornar nada
  @Input() toggleRegister: () => void = () => {};

}
