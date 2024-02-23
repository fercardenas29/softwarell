import { Component, OnInit } from '@angular/core';
import { Habitacion } from '../../models/habitacion';
import { HabitacionService } from '../../services/habitacion.services';
import { Global } from '../../services/global';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './hospedaje.component.html',
  styleUrls: ['./hospedaje.component.css'],
  providers: [HabitacionService]
})
export class HospedajeComponent implements OnInit{

  public habitaciones: Habitacion[];
  public url: string;
  
  constructor(
    private _habitacionService: HabitacionService
  ){
    this.url = Global.url;
    this.habitaciones = [];
  }

  ngOnInit(): void {
    this.getHabitaciones();
  }

  getHabitaciones() {
    this._habitacionService.getHabitaciones().subscribe(
      response => {
        if(response.habitaciones) {
          this.habitaciones = response.habitaciones;
          //console.log(this.habitaciones);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
