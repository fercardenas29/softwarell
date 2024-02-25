import { Component, OnInit } from '@angular/core';
import { HabitacionService } from '../../services/hotel.service';
import { Habitacion } from '../../models/hotel';
import { Global } from '../../services/global';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {
  habitacionesEnCarrito: Habitacion[] = [];
  total: number = 0;
  public habitaciones: Habitacion[];
  public url: string;
  urlBackend: string = 'http://localhost:3700/';

  constructor(
    private habitacionService: HabitacionService,
    private router: Router // Inyectar el servicio de enrutamiento
  ){
    this.url = Global.url;
    this.habitaciones = [];
  }

  ngOnInit() {
    this.habitacionesEnCarrito = this.habitacionService.obtenerCarrito();
    this.calcularTotal();
  }

  calcularTotal() {
    this.total = this.habitacionesEnCarrito.reduce((acc, habitacion) => acc + habitacion.precio, 0);
  }

  eliminarDelCarrito(id: string) {
    this.habitacionService.eliminarDelCarrito(id);
    this.habitacionesEnCarrito = this.habitacionService.obtenerCarrito();
    this.calcularTotal();
  }
}
