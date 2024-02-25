import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { LoginComponent } from './components/login/login.component';  
import { PieComponent } from './components/pie/pie.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { SesionComponent } from './components/sesion/sesion.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HabitacionComponent } from './components/habitacion/habitacion.component';
import { HomeComponent } from './components/home/home.component';
import { TycComponent } from './components/tyc/tyc.component';
import { CrearUsuComponent } from './components/crear-usu/crear-usu.component';

//Declarar los modulos 
@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    LoginComponent,
    PieComponent,
    ReservaComponent,
    SesionComponent,
    SobreNosotrosComponent,
    ContactoComponent,
    HabitacionComponent,
    HomeComponent,
    TycComponent,
    CrearUsuComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
