import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fechaIngreso: string = '';
  fechaSalida: string = '';

  ngOnInit(): void {
    // Lógica de JavaScript para manejar las fechas
    const fechaIngreso = document.getElementById('fechaIngreso') as HTMLInputElement;
    const fechaSalida = document.getElementById('fechaSalida') as HTMLInputElement;
    const botonBuscar = document.getElementById('botonBuscar') as HTMLButtonElement;

    const hoy = new Date();
    const fechaMinima = hoy.toISOString().split('T')[0];
    fechaIngreso.setAttribute('min', fechaMinima);
    fechaSalida.setAttribute('min', fechaMinima);

    function actualizarYValidarFechas() {
      fechaSalida.setAttribute('min', fechaIngreso.value);
      botonBuscar.disabled = !(fechaIngreso.value && fechaSalida.value && new Date(fechaIngreso.value) <= new Date(fechaSalida.value));
    }

    fechaIngreso.addEventListener('change', actualizarYValidarFechas);
    fechaSalida.addEventListener('change', actualizarYValidarFechas);
  }

  // Método para verificar si las fechas son válidas
  fechasValidas(): boolean {
    const fechaIngresoDate = new Date(this.fechaIngreso);
    const fechaSalidaDate = new Date(this.fechaSalida);

    if (isNaN(fechaIngresoDate.getTime()) || isNaN(fechaSalidaDate.getTime())) {
      return false;
    }

    return fechaSalidaDate > fechaIngresoDate;
  }

  // Método para buscar habitaciones
  buscarHabitaciones(): void {
    if (this.fechasValidas()) {
      console.log('Buscar habitaciones con las fechas:', this.fechaIngreso, this.fechaSalida);
      // Aquí puedes implementar la lógica para buscar habitaciones con las fechas ingresadas
    } else {
      console.log('Las fechas ingresadas no son válidas.');
    }
  }
}
