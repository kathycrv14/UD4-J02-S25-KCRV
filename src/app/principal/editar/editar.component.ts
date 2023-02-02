import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/models/users';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit{
  redireccion = '' 

  constructor(private userService: UserserviceService, private autenticacion: AutenticacionService, private router: Router, private route: ActivatedRoute, public dialog: MatDialog){}

  // Crear objeto que se evniara a al api
  datos: Users[] = [{id: '', title: '', firstname:'', lastname:'', email:'', role:'', password:''}];
  
  onSubmit(){
    this.userService.getEditar(this.datos[0]).subscribe(
      (usuario: Users)=>alert(usuario)
    );
    this.router.navigate(['/vista']);
    /* console.log(this.datos) */
  }

  Cancel(){
    this.router.navigate(['/vista']);
  }

    hide = true;

    ngOnInit(){
      this.datos[0].id=this.route.snapshot.params['id'].toString();
      let id = this.route.snapshot.params['id'];
      this.userService.getBuscar(id).subscribe(
      {
      next:(datos:Users[]) => this.datos[0] = datos[0]
      }
      );
    }
}
