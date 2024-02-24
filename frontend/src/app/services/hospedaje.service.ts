import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Global } from "./global";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Habitacion } from "../models/habitacion";

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
    guardarHospedaje(hospedaje:Habitacion):Observable<any>{
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
    updateHospedaje(hospedaje:Habitacion):Observable<any>{
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