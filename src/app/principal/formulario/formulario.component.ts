import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  constructor(private userService: UserserviceService, private autenticacion: AutenticacionService, private router: Router){}

  // Crear objeto que se evniara a al api
  datos: Users = {id: '', name: '', username:''};
  
  onSubmit(){
    this.userService.postUser(this.datos).subscribe(
      (usuario: Users)=>console.log(usuario)
    );
  }
  
    // Angular Material

    redireccion = '';
  
    login(){
      this.autenticacion.login();
      this.redireccion = this.autenticacion.urlUsuarioIntentaAcceder;
      this.autenticacion.urlUsuarioIntentaAcceder = '';
      this.router.navigate([this.redireccion]);
    }
    hide = true;
}
