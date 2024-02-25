import { Component } from '@angular/core';
import { Cliente } from '../../models/hotel';
import { ClienteService } from '../../services/hotel.service';

@Component({
  selector: 'app-crear-usu',
  templateUrl: './crear-usu.component.html',
  styleUrls: ['./crear-usu.component.css'],
  providers: [ClienteService]
})
export class CrearUsuComponent {
  cliente: Cliente = new Cliente('', '', '', '', '', '');
  status: string = '';

  constructor(private clienteService: ClienteService) {}

  registrarCliente() {
    this.clienteService.guardarCliente(this.cliente).subscribe(
      response => {
        console.log('Cliente registrado exitosamente:', response);
        this.status = 'success';
      },
      error => {
        console.error('Error al registrar cliente:', error);
        this.status = 'failed';
      }
    );
  }
}
