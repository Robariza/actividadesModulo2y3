// injeccion de directivas de angular, formularios
import { Component, inject } from '@angular/core';
// permite interactuar con formularios
import { FormsModule } from '@angular/forms';
// permite hacer la redireccion a otra pagina (no hace falta importarlo)
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingreso',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ingreso.component.html',
  styleUrl: './ingreso.component.css'
})

export class IngresoComponent {
  // injectamos lo que necesitamos -> decirle al componente que voy a utilizar
  // injectamos nuestra directiva del router (permite al redireccion)
  // estamos dentro de una clase de ts, entonces declaramos lo que usamos como atributos
  router = inject(Router);//router (variable) =(asiganamos) inject(injectamos)(Router)(objeto, lo que vamos a injectar)

  // CREDENCIALES DE ACCESO
  // vamos a dar datos para validar administración
  administrador = {
    correo: 'admin@mail.com',
    contrasena: 'admin'
  };

  // los datos tipo estring se inicializan en '', los numericos en 0 y los booleanos en false

  correo: string = ''
  contrasena: string = ''

  // Logica para redireccionar a la otra página
  iniciarSesion() {
    if (this.correo === this.administrador.correo && this.contrasena === this.administrador.contrasena) {
      alert('Bienvenido Administrador!');
      this.router.navigate(['/admin']);
    } else {
      alert('correo o contraseña incorrectos');
    }
  }

}
