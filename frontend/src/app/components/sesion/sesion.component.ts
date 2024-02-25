// sesion.component.ts
import { Component, OnInit } from '@angular/core';
import { Cliente, Habitacion, Reserva } from '../../models/hotel';
import { ClienteService , ReservaService } from '../../services/hotel.service';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit {
  public clienteActual: Cliente | null = null;
  public reservasConfirmadas: Reserva[] = [];
  
  constructor(
    private clienteService: ClienteService,
    private reservaService: ReservaService,
  ) {}

  ngOnInit(): void {
    const clienteId = '65daf0c78e3761601e5a6c07'; // ID quemado
    this.cargarCliente(clienteId);
    this.cargarCliente(clienteId);
    this.cargarReservasDelCliente(clienteId);
  }

  cargarCliente(clienteId: string) {
    this.clienteService.getCliente(clienteId).subscribe(
      response => {
        this.clienteActual = response.cliente;
      },
      error => {
        console.error('Error al cargar el cliente:', error);
      }
    );
  }

  cargarReservasDelCliente(clienteId: string) {
    this.reservaService.getReservasPorCliente(clienteId).subscribe({
      next: (res) => {
        this.reservasConfirmadas = res.reservas;
      },
      error: (err) => {
        console.error('Error al cargar las reservas:', err);
      }
    });
  }

  confirmarReserva(): void {
    const habitaciones = this.cargarCarritoDesdeLocalStorage().map(hab => hab._id);
    const clienteId = this.clienteActual ? this.clienteActual._id : null;

    // Asegúrate de que clienteId no sea null antes de continuar
    if (clienteId === null) {
      console.error('No hay un cliente actual seleccionado.');
      return;
    }

    const nuevaReserva = new Reserva(
      null, // Por ahora null o una fecha de prueba
      null, // Por ahora null o una fecha de prueba
      habitaciones,
      clienteId, // Usa clienteId que ya sabemos que no es null
    );
    // Llamar al servicio para guardar la reserva
    this.reservaService.guardarReserva(nuevaReserva).subscribe({
      next: (res) => {
        console.log('Reserva guardada con éxito:', res);
        // Aquí podrías redirigir al usuario o mostrar un mensaje de éxito
      },
      error: (err) => {
        console.error('Error al guardar la reserva:', err);
        // Manejar el error, por ejemplo, mostrando un mensaje al usuario
      }
      
    });
    this.cargarReservasDelCliente(clienteId);
  }

  // Método para cargar el carrito desde localStorage
  private cargarCarritoDesdeLocalStorage(): Habitacion[] {
    const carritoJSON = localStorage.getItem('carrito');
    return carritoJSON ? JSON.parse(carritoJSON) : [];
  }
}