import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Global } from "./global";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Hospedaje } from "../models/hotel";
import { Contacto } from "../models/hotel";
import { Cliente } from "../models/hotel";
import { Reserva } from "../models/hotel";

//Cliente
@Injectable()
export class ClienteService{
    public url:string;
    constructor(
        private _http:HttpClient
    ){
        this.url=Global.url;
    }
    //ver cliente
    //http://locahost:3600/cliente
    getClientes():Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'clientes',{headers:headers});
    }
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




//Hospedaje
@Injectable()
export class HospedajeService{
    public url:string;
    constructor(
        private _http:HttpClient
    ){
        this.url=Global.url;
    }
    //ver hospedaje
    //http://locahost:3600/hospedaje
    getHospedajes():Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'hospedajes',{headers:headers});
    }
    //guardar hospedaje
    guardarHospedaje(hospedaje:Hospedaje):Observable<any>{
        let params=JSON.stringify(hospedaje);
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'guardar-hospedaje',params,{headers:headers});
    }
    //ver hospedaje
    getHospedaje(id:String):Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'hospedaje/'+id,{headers:headers});
    }
    //editar hospedaje
    updateHospedaje(hospedaje:Hospedaje):Observable<any>{
        let params=JSON.stringify(hospedaje);
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.put(this.url+'hospedaje/'+hospedaje._id,params,{headers:headers});
    }
    //eliminar hospedaje
    deleteHospedaje(id:String):Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.delete(this.url+'hospedaje/'+id,{headers:headers});
    }

    // Método para buscar un hospedaje por su nombre
    buscarHospedajePorNombre(nombre: string): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url + 'buscar-hospedaje/' + nombre, { headers: headers });
    }

}

//Contacto
@Injectable()
export class ContactoService{
    public url:string;
    constructor(
        private _http:HttpClient
    ){
        this.url=Global.url;
    }
    //ver cliente
    //http://locahost:3600/cliente
    getContactos():Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'contacto',{headers:headers});
    }
    //guardar cliente
    guardarContacto(contacto:Contacto):Observable<any>{
        let params=JSON.stringify(contacto);
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'guardar-contacto',params,{headers:headers});
    }
    //ver cliente
    getContacto(id:String):Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'contacto/'+id,{headers:headers});
    }
    //editar cliente
    updateContacto(contacto:Contacto):Observable<any>{
        let params=JSON.stringify(contacto);
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.put(this.url+'contacto/'+contacto._id,params,{headers:headers});
    }
    //eliminar cliente
    deleteContacto(id:String):Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.delete(this.url+'contacto/'+id,{headers:headers});
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
    //http://locahost:3600/reserva
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
    updateReserva(reserva:Reserva):Observable<any>{
        let params=JSON.stringify(reserva);
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.put(this.url+'reserva/'+reserva._id,params,{headers:headers});
    }
    //eliminar reserva
    deleteReserva(id:String):Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.delete(this.url+'reseerva/'+id,{headers:headers});
    }

    // Método para buscar un reserva por fecha
}


