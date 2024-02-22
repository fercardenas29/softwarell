import { Component } from '@angular/core';
import { ContactoService } from '../../services/hotel.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  nombre: string = '';
  telefono: string = '';
  correo: string = '';
  mensaje: string = '';

  constructor(private contactoService: ContactoService) {}

  guardarContacto(contactoForm: any) {
    if (contactoForm.valid) {
      this.contactoService.guardarContacto(contactoForm.value)
        .subscribe(
          response => {
            console.log('Contacto guardado exitosamente:', response);
            // Aquí puedes realizar acciones adicionales después de guardar el contacto, como redireccionar a otra página o actualizar la lista de contactos.
          },
          error => {
            console.error('Error al guardar contacto:', error);
            // Aquí puedes manejar el error, mostrar un mensaje al usuario, etc.
          }
        );
    } else {
      console.error('Formulario inválido');
    }
  }
}
