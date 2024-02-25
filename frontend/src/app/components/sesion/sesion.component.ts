import { Component, OnInit } from '@angular/core';
import { Cliente, Habitacion, Reserva } from '../../models/hotel';
import { ClienteService , ReservaService } from '../../services/hotel.service';

declare var paypal: any;

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
    if ((window as any)['paypal']) { // Aquí se especifica 'any' para la expresión de índice
      this.initializePayPalButton();
    } else {
      // Agrega el script de PayPal si aún no está cargado
      const script = document.createElement('script');
      script.src = 'https://www.paypal.com/sdk/js?currency=USD&client-id=AUtvW7SAEUXaG1SUQ1JbLMz9mrvyzFHsmeRBcn8l_bY-_Q1MGEkjicLc6ra_LlchwzFaYX-8kgJkDqy6';
      script.onload = () => {
        this.initializePayPalButton();
      };
      document.body.appendChild(script);
    }
  }

initializePayPalButton(): void {
    paypal.Buttons({
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: '100.00'
              }
            }
          ]
        });
      },
      onApprove: (data: any, actions: any) => {
        // Lógica cuando el usuario aprueba el pago
      },
      onError: (err: any) => {
        // Lógica en caso de error en el pago
      }
    }).render('#paypal-button-container');
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
