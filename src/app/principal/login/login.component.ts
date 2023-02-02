import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  firstname:string=""
  password:string=""
  datos = {firstname:'',password:''}
  respuesta= {id:'',role:''}
  
  constructor(private service : UserserviceService,private autenticacion: AutenticacionService, private router: Router){}
  
  

  ngOnInit(): void {
  }
  login(rol:string){
    if(this.autenticacion.getRol(rol)){
      this.router.navigate(['home']);

    }else{
      alert("Credenciales incorrectas");
    }
  }
  onSubmit(){
    this.datos = {
      firstname: this.firstname,
      password: this.password
    }
    console.log(this.datos)
    this.service.checkUser(this.datos).subscribe(
      (re : any) => {
        this.respuesta = re
        this.login(re.role)
      }
    )
  }
  hide = true;
}
