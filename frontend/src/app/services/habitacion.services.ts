import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Habitacion } from "../models/habitacion";
import { Global } from "./global";
import { Observable } from "rxjs";

@Injectable()
export class HabitacionService {
    public url:string;
    constructor(
        private _http:HttpClient
    ){
        this.url = Global.url;
    }
    // Ver todas las habitaciones
    // http://localhost:3700/habitaciones
    getHabitaciones():Observable<any>{
        let headers=new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'habitaciones',{headers:headers});
    }

    // Guardar habitacion
    // http://localhost:3700/guardar-habitacion
    guardarHabitacion(habitacion: Habitacion): Observable<any>{
        let params = JSON.stringify(habitacion);

        let headers=new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url+'guardar-habitacion', params, {headers:headers});
    }

    // Ver habitacion
    // http://localhost:3700/habitacion/:id
    getHabitacion(id: string): Observable<any>{
        let headers=new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'habitacion/'+id,{headers:headers});
    }

    // Editar habitacion
    // http://localhost:3700/habitacion/:id
    updateHabitacion(habitacion: Habitacion): Observable<any>{
        let params = JSON.stringify(habitacion);

        let headers=new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url+'habitacion/'+habitacion._id,params,{headers:headers});
    }

    // Eliminar habitacion
    // http://localhost:3700/habitacion/:id
    deleteHabitacion(id: string): Observable<any>{
        let headers=new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url+'habitacion/'+id,{headers:headers});
    }
}