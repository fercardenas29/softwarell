import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component'; 
import { HabitacionComponent } from './components/habitacion/habitacion.component';
import { LoginComponent } from './components/login/login.component';  
import { ReservaComponent } from './components/reserva/reserva.component';
import { SesionComponent } from './components/sesion/sesion.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { TycComponent } from './components/tyc/tyc.component';


const routes: Routes = [
  { path:'inicio', component:HomeComponent},
  { path: 'contacto', component: ContactoComponent },
  { path: 'habitacion', component: HabitacionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reserva', component: ReservaComponent },
  { path: 'sesion', component: SesionComponent },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  { path: 'tyc', component: TycComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
