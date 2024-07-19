// injeccion de directivas de angular, formularios -> colocamos inject con component ya que ambos hacen parte de @angular/core
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
  // injectamos lo que necesitamos -> es decirle al componente qué voy a utilizar
  // injectamos nuestra directiva del router (permite al redireccion)
  // estamos dentro de una clase de ts, entonces declaramos lo que usamos como atributos
  router = inject(Router);//router (variable) =(asiganamos) inject(injectamos)(Router)(objeto, lo que vamos a injectar)

  // CREDENCIALES DE ACCESO
  // vamos a dar datos para validar administración
  administrador = {
    correo: 'admin@mail.com',
    contrasena: 'admin'
  };

  // los datos tipo estring se inicializan en '' (vacío), los numéricos en 0 y los booleanos en false

  // Debemos conectar estas varibales con el formulario de ingreso en HTML, hacemos uso de FormsModule
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
