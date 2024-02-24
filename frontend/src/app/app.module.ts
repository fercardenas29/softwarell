import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { LoginComponent } from './components/login/login.component';  
import { PieComponent } from './components/pie/pie.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { SesionComponent } from './components/sesion/sesion.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HabitacionComponent } from './components/habitacion/habitacion.component';

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
    HabitacionComponent

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