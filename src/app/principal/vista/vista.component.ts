import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { UserserviceService } from 'src/app/services/userservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogOverviewComponent } from '../dialog-overview/dialog-overview.component';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent {

  // ************ //
/*   listado: Users[] = [];
  displayedColumns: string[] = ['id', 'title', 'firstname','lastname','email','role','password', 'options'];
  dataSource: any;
  clickedRows = new Set<Users>(); */

  // ************ //

  redireccion = '' 
  
  constructor(private userService: UserserviceService, private autenticacion: AutenticacionService, private router: Router,private dialogo: MatDialog){}

/*   datos: Users[] = [{id: '', title: '', firstname:'', lastname:'', email:'', role:'', password:''}];*/

  /* ngOnInit(){
    this.userService.getUsersAll().subscribe({
      next: (UserAll: Users[]) => 
        {
          this.listado = UserAll,
          this.dataSource = this.listado
        },
      error: (e) => console.error(e),
      complete: () => console.info("La API devolvio todos los registros")
    }); */

    lista: Users[] =[{id: '', title: '', firstname:'', lastname:'', email:'', role:'', password:''}];

  ngOnInit(){
    this.userService.getVista().subscribe({
      next:(vista: Users[]) => this.lista = vista
    });
  }

  Eliminar(id: string){
    this.dialogo
    .open(DialogOverviewComponent, {
      data: `¿Realmente quieres eliminar?`
    })
    .afterClosed()
    .subscribe((confirmado: Boolean) => {
      if (!confirmado) return;
    this.userService.getEliminar(id).subscribe({
      next: (mensaje: string) => alert(mensaje)
    });
    this.userService.getVista().subscribe({
      next:(vista: Users[]) => this.lista = vista
    });
  })}
   



    Add(){
    this.router.navigate(['/formulario']);
    }

    
  }


