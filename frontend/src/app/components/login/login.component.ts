import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../models/hotel';
import { ClienteService } from '../../services/hotel.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ClienteService]
})
export class LoginComponent {
  correo: string = '';
  contrasena: string = '';
  error: string = '';

  constructor(
    private clienteService: ClienteService,
    private router: Router
    ) {}

  iniciarSesion(): void {
    if (this.correo && this.contrasena) {
      this.clienteService.iniciarSesion(this.correo, this.contrasena)
        .subscribe(
          (response) => {
            // Manejar la respuesta del servidor
            // Por ejemplo, redirigir al usuario a otra página
            console.log('Inicio de sesión exitoso:', response);
            this.router.navigate(['/sesion']); // Cambia '/sesion' por la ruta deseada

          },
          (error) => {
            // Manejar el error
            this.error = 'Error al iniciar sesión. Por favor, verifica tus credenciales.';
            console.error('Error al iniciar sesión:', error);
          }
        );
    } else {
      this.error = 'Por favor, ingresa tu correo electrónico y contraseña.';
    }
  }

}
