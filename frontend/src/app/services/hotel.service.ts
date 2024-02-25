import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Habitacion, Reserva, Cliente } from "../models/hotel";
import { Global } from "./global";
import { Observable } from "rxjs";

//Cliente
@Injectable()
export class ClienteService{
    public url:string;
    constructor(
        private _http:HttpClient
    ){
        this.url=Global.url;
    }
    
    //http://locahost:3700/cliente
    //guardar cliente
    guardarCliente(cliente:Cliente):Observable<any>{
        let params=JSON.stringify(cliente);
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'guardar-cliente',params,{headers:headers});
    }
    //ver cliente
    getCliente(id:String):Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'cliente/'+id,{headers:headers});
    }
    //editar cliente
    updateCliente(cliente:Cliente):Observable<any>{
        let params=JSON.stringify(cliente);
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.put(this.url+'cliente/'+cliente._id,params,{headers:headers});
    }
    //eliminar cliente
    deleteCliente(id:String):Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.delete(this.url+'cliente/'+id,{headers:headers});
    }
}

//Reserva
@Injectable()
export class ReservaService{
    public url:string;
    constructor(
        private _http:HttpClient
    ){
        this.url=Global.url;
    }
    //ver reserva
    //http://locahost:3700/reserva
    getReservas():Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'reservas',{headers:headers});
    }
    //guardar reserva
    guardarReserva(reserva:Reserva):Observable<any>{
        let params=JSON.stringify(reserva);
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'guardar-reserva',params,{headers:headers});
    }
    //ver reserva
    getReserva(id:String):Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'reserva/'+id,{headers:headers});
    }
    //editar reserva
    /*
    updateReserva(reserva:Reserva):Observable<any>{
        let params=JSON.stringify(reserva);
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.put(this.url+'reserva/'+reserva._id,params,{headers:headers});
    }
    */
    //eliminar reserva
    deleteReserva(id:String):Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.delete(this.url+'reseerva/'+id,{headers:headers});
    }

    // Método para buscar un reserva por fecha
}


//Habitacion
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