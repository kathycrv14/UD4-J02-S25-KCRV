import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanactivateGuard } from './canactivate.guard';
import { CandesactivateGuard } from './candesactivate.guard';


import { EditarComponent } from './principal/editar/editar.component';
import { FormularioComponent } from './principal/formulario/formulario.component';
import { HomeComponent } from './principal/home/home.component';
import { LoginComponent } from './principal/login/login.component';

import { OperacionComponent } from './principal/operacion/operacion.component';
import { VistaComponent } from './principal/vista/vista.component';

const routes: Routes = [
  {path: 'vista', component: VistaComponent, canActivate: [CanactivateGuard]},
  {path: 'formulario', component: FormularioComponent, canActivate: [CanactivateGuard]},


  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},

  {path: 'home', component: HomeComponent, canActivate: [CanactivateGuard]},


  {path: 'operacion', component: OperacionComponent, canActivate: [CanactivateGuard]},

  {path: 'vista/editar/:id', component: EditarComponent},

  {path: 'editar', component: EditarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
