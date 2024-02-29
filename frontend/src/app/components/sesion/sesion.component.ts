import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Cliente, Habitacion, Reserva } from '../../models/hotel';
import { ClienteService , ReservaService, HabitacionService } from '../../services/hotel.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Inject } from '@angular/core';

declare var paypal: any;

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit {
  @ViewChild('paypal', { static: true }) paypalElement!: ElementRef;
  public clienteActual: Cliente | null = null;
  public reservasConfirmadas: Reserva[] = [];
  public habitacionService: HabitacionService;
  mostrarMensajeCrearCuenta: boolean = false;
  public habitaciones: Habitacion[] = [];
  public reservaciones: Reserva[] = [];
  public adultos: number = 1; // Variable para almacenar el número de adultos
  public children: number = 0; // Variable para almacenar el número de children
  formularioModificacionReserva: FormGroup = new FormGroup({}); // Initialize the "formularioModificacionReserva" property with an empty FormGroup
  reservaSeleccionada: Reserva | null = null;
  reservas: Reserva[] = [];
  constructor(
    private clienteService: ClienteService,
    private reservaService: ReservaService,
    private _habitacionService: HabitacionService,
    private formBuilder: FormBuilder
  ) {
    this.habitacionService = _habitacionService; // Inicializa la propiedad habitacionService
  }

  ngOnInit(): void {
    /*
    // Inicializar el formulario de modificación de reservas
    this.formularioModificacionReserva = this.formBuilder.group({
      _id: [''], // Identificador de reserva
      fechaInput: [''], // Fecha de entrada
      fechaOutput: [''], // Fecha de salida
      numeroAdultos: [''], // Número de adultos
      numeroNinos: [''], // Número de niños
      total: [''], // Total
      habitaciones: [''], // Habitaciones
      cliente: [''] // Cliente
    });

    //this.obtenerReservas();
    */
    const clienteActualStorage = localStorage.getItem('clienteActual');
    const clienteActual = clienteActualStorage ? JSON.parse(clienteActualStorage) : null;
    const clienteId = clienteActual ? clienteActual._id : null;
    this.adultos = parseInt(localStorage.getItem('adults') || '1');
    this.children = parseInt(localStorage.getItem('children') || '0');

    if (!clienteId) {
      console.error('No hay un cliente actual en el almacenamiento local.');
      this.mostrarMensajeCrearCuenta = true; // Establecer mostrarMensajeCrearCuenta en true
      return;
    }

    this.clienteActual = clienteActual; // Establecemos el cliente actual
    const totalCarrito = this.habitacionService.obtenerTotalCarritoDesdeLocalStorage(); // Obtener el total del carrito
    this.cargarCliente(clienteId);
    this.cargarReservasDelCliente(clienteId);
    
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

  mostrarFormularioModificacion(reserva: Reserva): void {
    // Crear una cadena HTML para el formulario
     // Verificar si reserva.fechaInput es una fecha válida
  const fechaInputValue = reserva.fechaInput instanceof Date ? reserva.fechaInput.toISOString().split('T')[0] : '';

  // Verificar si reserva.fechaOutput es una fecha válida
  const fechaOutputValue = reserva.fechaOutput instanceof Date ? reserva.fechaOutput.toISOString().split('T')[0] : '';
  // Crear una cadena HTML para el formulario
  const formularioHTML = `
    <form id="formularioModificacion">
      <label for="fechaInput">Fecha de Entrada:</label>
      <input type="date" id="fechaInput" name="fechaInput" value="${fechaInputValue}"><br><br>
      <label for="fechaOutput">Fecha de Salida:</label>
      <input type="date" id="fechaOutput" name="fechaOutput" value="${fechaOutputValue}"><br><br>
      <!-- Otros campos del formulario -->
      <input type="submit" value="Guardar Cambios" id="guardarCambiosBtn">
    </form>
  `;
  
    // Abrir una nueva ventana para mostrar el formulario de modificación
    const nuevaVentana = window.open('', 'Modificar Reserva', 'width=400,height=500');
  
    // Escribir el contenido HTML en la nueva ventana
    if (nuevaVentana) {
      nuevaVentana.document.body.innerHTML = formularioHTML;
  
      // Obtener el formulario dentro de la nueva ventana
      const formulario = nuevaVentana.document.getElementById('formularioModificacion');
  
      // Agregar un evento al formulario
      formulario?.addEventListener('submit', (event) => {
        event.preventDefault(); // Evitar el envío del formulario por defecto
  
        // Obtener los valores de los campos del formulario
        const fechaInputString = (<HTMLInputElement>nuevaVentana.document.getElementById('fechaInput'))?.value;
        const fechaOutputString = (<HTMLInputElement>nuevaVentana.document.getElementById('fechaOutput'))?.value;
  
        // Convertir las cadenas de texto a objetos Date
        const fechaInput = new Date(fechaInputString);
        const fechaOutput = new Date(fechaOutputString);
  
        // Verificar si las fechas son válidas antes de asignarlas
        if (!isNaN(fechaInput.getTime()) && !isNaN(fechaOutput.getTime())) {
          // Lógica para enviar los datos al servidor
          const reservaId = reserva._id || ''; // usa para obtener la ID de la reserva
          const reservaModificada: Reserva = {
            ...reserva,
            fechaInput,
            fechaOutput
          };
          this.enviarFormularioModificacion(reservaModificada, reservaId);
  
          // Cierra la ventana después de realizar las acciones necesarias
          nuevaVentana.close();
        } else {
          console.error('Las fechas ingresadas no son válidas');
        }
      });
    } else {
      console.error('No se pudo abrir la ventana de modificación de reserva');
    }
  }
  
  // Función para enviar el formulario de modificación al servidor
  enviarFormularioModificacion(reservaModificada: Reserva, reservaId: string): void {
    // Agrega la ID de la reserva al objeto que se enviará al servidor
    reservaModificada._id = reservaId;
  
    this.reservaService.updateReserva(reservaModificada).subscribe({
      next: (res) => {
        console.log('Reserva modificada con éxito:', res);
      },
      error: (error) => {
        console.error('Error al modificar la reserva:', error);
      }
    });
  }
  


  // Método para obtener todas las reservas
  obtenerReservas(): void {
    this.reservaService.getReservas().subscribe(
      (reservas: Reserva[]) => {
        this.reservas = reservas;
      },
      error => {
        console.error('Error al obtener las reservas:', error);
      }
    );
  }

  // Método para obtener una reserva por su ID
  obtenerReserva(id: string): void {
    this.reservaService.getReserva(id).subscribe(
      (reserva: Reserva) => {
        // Aquí puedes manejar la respuesta, por ejemplo, asignarla a una propiedad
        this.reservaSeleccionada = reserva;
      },
      error => {
        console.error('Error al obtener la reserva por ID:', error);
      }
    );
    }

  guardarDatosAdicionales(): void {
    localStorage.setItem('adultos', this.adultos.toString());
    localStorage.setItem('children', this.children.toString());
  }

  decrementAdultos(): void {
    if (this.adultos > 1) {
      this.adultos--;
      this.guardarDatosAdicionales();
    }
  }

  incrementAdultos(): void {
    if (this.adultos < 5) {
      this.adultos++;
      this.guardarDatosAdicionales();
    }
  }

  decrementchildren(): void {
    if (this.children > 0) {
      this.children--;
      this.guardarDatosAdicionales();
    }
  }

  incrementchildren(): void {
    if (this.children < 5) {
      this.children++;
      this.guardarDatosAdicionales();
    }
  }

  eliminarReserva(reservaId: string): void {
    this.reservaService.deleteReserva(reservaId).subscribe({
      next: (res) => {
        console.log('Reserva eliminada con éxito:', res);

        const habitacionesActualizadas = this.reservasConfirmadas.find(reserva => reserva._id === reservaId)?.habitaciones;

        if (habitacionesActualizadas) {
          habitacionesActualizadas.forEach(habitacionId => {
            const habitacion = this.habitaciones.find(h => h._id === habitacionId);
            if (habitacion) {
              this.habitacionService.updateHabitacion({...habitacion, cantidad: habitacion.cantidad + 1}).subscribe({
                next: (updateRes) => {
                  console.log('Habitación actualizada con éxito:', updateRes);
                },
                error: (err) => {
                  console.error('Error al actualizar la habitación:', err);
                }
              });
            }
          });
        }

        this.reservasConfirmadas = this.reservasConfirmadas.filter(reserva => reserva._id !== reservaId);
      },
      error: (err) => {
        console.error('Error al eliminar la reserva:', err);
      }
    });
  }

  initializePayPalButton(totalCarrito: number): void {
    paypal.Buttons({
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: totalCarrito.toString()
              }
            }
          ]
        });
      },
      onApprove: (data: any, actions: any) => {
        return actions.order.capture().then((details: any) => {
            console.log('Pago aprobado:', details);
            this.confirmarReserva();
            const carrito = this.cargarCarritoDesdeLocalStorage();
            carrito.forEach(habitacion => {
                this.habitacionService.updateHabitacion({...habitacion, cantidad: habitacion.cantidad - 1}).subscribe({
                    next: (res) => {
                        console.log('Habitación actualizada con éxito:', res);
                    },
                    error: (err) => {
                        console.error('Error al actualizar la habitación:', err);
                    }
                });
            });
            alert('¡Pago exitoso! Gracias por su compra.');
        });
      },
      onError: (err: any) => {
        console.error('Error en el pago:', err);
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
        this.reservasConfirmadas.forEach(reserva => {
          reserva.habitaciones.forEach((habitacionId, index) => {
            this.habitacionService.obtenerNombreHabitacion(habitacionId).subscribe(nombre => {
              reserva.habitaciones[index] = nombre;
            });
          });
        });
      },
      error: (err) => {
        console.error('Error al cargar las reservas:', err);
      }
    });
  }

  confirmarReserva(): void {
    const habitaciones = this.cargarCarritoDesdeLocalStorage().map(hab => hab._id);
    const clienteId = this.clienteActual ? this.clienteActual._id : null;
    const totalCarrito = this.habitacionService.obtenerTotalCarritoDesdeLocalStorage();

    if (clienteId === null) {
      console.error('No hay un cliente actual seleccionado.');
      return;
    }

    const fechaIngreso = localStorage.getItem('fechaIngreso');
    const fechaSalida = localStorage.getItem('fechaSalida');

    if (!fechaIngreso || !fechaSalida) {
      console.error('Las fechas de ingreso y salida no están disponibles.');
      return;
    }

    const nuevaReserva = new Reserva(
      null,
      new Date(fechaIngreso),
      new Date(fechaSalida),
      this.adultos,
      this.children,
      totalCarrito,
      habitaciones,
      clienteId
    );

    this.reservaService.guardarReserva(nuevaReserva).subscribe({
      next: (res) => {
        console.log('Reserva guardada con éxito:', res);
        console.log('Datos de la reserva:', nuevaReserva);
      },
      error: (err) => {
        console.error('Error al guardar la reserva:', err);
      }
    });

    this.cargarReservasDelCliente(clienteId);
  }

  private cargarCarritoDesdeLocalStorage(): Habitacion[] {
    const carritoJSON = localStorage.getItem('carrito');
    return carritoJSON ? JSON.parse(carritoJSON) : [];
  }

  cerrarSesion(): void {
    localStorage.removeItem('clienteActual');
    window.location.href = '/inicio';
  }
}


/*
function enviarFormularioModificacion() {
  throw new Error('Function not implemented.');
}
*/

