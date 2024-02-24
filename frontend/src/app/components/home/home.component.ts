import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  fechaIngreso: string = '';
  fechaSalida: string = '';

  // Método para verificar si las fechas son válidas
  fechasValidas(): boolean {
    // Parsea las fechas a objetos Date
    const fechaIngresoDate = new Date(this.fechaIngreso);
    const fechaSalidaDate = new Date(this.fechaSalida);

    // Verifica que las fechas no sean NaN (lo que indica que la fecha ingresada no es válida)
    if (isNaN(fechaIngresoDate.getTime()) || isNaN(fechaSalidaDate.getTime())) {
      return false;
    }

    // Verifica que la fecha de salida sea posterior a la fecha de ingreso
    return fechaSalidaDate > fechaIngresoDate;
  }

  // Método para buscar habitaciones
  buscarHabitaciones(): void {
    if (this.fechasValidas()) {
      // Aquí puedes implementar la lógica para buscar habitaciones con las fechas ingresadas
      console.log('Buscar habitaciones con las fechas:', this.fechaIngreso, this.fechaSalida);
    } else {
      console.log('Las fechas ingresadas no son válidas.');
    }
  }
}
