import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  constructor(private http: HttpClient) {}

  enviarConsulta(nombre: string, telefono: string, correo: string, mensaje: string): void {
    const formData = {
      nombre,
      telefono,
      correo,
      mensaje
    };

    this.http.post('URL_DEL_ENDPOINT', formData).subscribe(
      (response) => {
        console.log('Correo electrónico enviado con éxito:', response);
        // Aquí podrías mostrar un mensaje de éxito al usuario
      },
      (error) => {
        console.error('Error al enviar el correo electrónico:', error);
        // Aquí podrías mostrar un mensaje de error al usuario
      }
    );
  }
}
