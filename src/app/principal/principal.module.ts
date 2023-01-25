import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { VistaComponent } from './vista/vista.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { OperacionComponent } from './operacion/operacion.component';

//Angular Material
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';


import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    MenuComponent,
    VistaComponent,
    FormularioComponent,
    BusquedaComponent,
    LoginComponent,
    MensajeComponent,
    OperacionComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    //Angular Material
    MatInputModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatCheckboxModule,
    MatDividerModule,
    MatTableModule,
  ],
  exports:[
    MenuComponent,
    VistaComponent,
    FormularioComponent,
    BusquedaComponent,
    LoginComponent,
    MensajeComponent,
    OperacionComponent,

    //Angular Material
    MatInputModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatCheckboxModule,
    MatDividerModule,
    MatTableModule,
  ]
})
export class PrincipalModule { }
