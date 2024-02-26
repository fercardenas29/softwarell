import { Component, OnInit } from '@angular/core';
import { Cliente, Habitacion, Reserva } from '../../models/hotel';
import { ClienteService , ReservaService } from '../../services/hotel.service';
import { HabitacionService } from '../../services/hotel.service'; // Add the missing import statement

declare var paypal: any;

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit {
  public clienteActual: Cliente | null = null;
  public reservasConfirmadas: Reserva[] = [];
  public habitacionService: HabitacionService; 

  constructor(
    private clienteService: ClienteService,
    private reservaService: ReservaService,
    private _habitacionService: HabitacionService
  ) {
    this.habitacionService = _habitacionService; // Inicializa la propiedad habitacionService

  }

  public totalCarrito: number = 0;

  ngOnInit(): void {
    const totalCarrito = this.habitacionService.obtenerTotalCarritoDesdeLocalStorage(); // Obtener el total del carrito
    if ((window as any)['paypal']) { // Verificar si paypal está definido en la ventana
      this.initializePayPalButton(totalCarrito); // Pasar el total del carrito al inicializar el botón de PayPal
    } else {
      // Agregar el script de PayPal si aún no está cargado
      const script = document.createElement('script');
      script.src = 'https://www.paypal.com/sdk/js?currency=USD&client-id=AVA2QbjVbUwBFhkPODx8IoLi1VM5hWdxtj0IWgnzY7cX2_hORx-2w8RcOWiMAWHNc5RMRmcygagZDlPr';
      script.onload = () => {
        this.initializePayPalButton(totalCarrito); // Pasar el total del carrito al inicializar el botón de PayPal
      };
      document.body.appendChild(script);
    }
}

initializePayPalButton(totalCarrito: number): void {
    paypal.Buttons({
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: totalCarrito.toString() // Utilizar el total del carrito como el valor del pago
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
/*
  obtenerTotalCarritoDesdeLocalStorage(): number {
    const carritoJSON = localStorage.getItem('carrito');
    if (carritoJSON) {
        const carrito = JSON.parse(carritoJSON);
        this.totalCarrito = carrito.reduce((total: number, hab: Habitacion) => total + hab.precio, 0);
    } else {
        this.totalCarrito = 0; // Si no hay elementos en el carrito, el total es cero
    }
    return this.totalCarrito;
}
*/
}
