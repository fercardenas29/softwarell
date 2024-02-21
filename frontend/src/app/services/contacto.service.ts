import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Global } from "./global";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Contacto } from "../models/contacto";

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