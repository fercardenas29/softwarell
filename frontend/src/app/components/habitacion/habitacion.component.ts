import { Component, OnInit } from '@angular/core';
import { Habitacion } from '../../models/hotel';
import { HabitacionService } from '../../services/hotel.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitacion.component.html',
  styleUrls: ['./habitacion.component.css'],
  providers: [HabitacionService]
})
export class HabitacionComponent implements OnInit{

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