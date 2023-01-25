import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent {

  mensaje = "";
  enviado = false;

  EnviarMensaje(){
    alert('Mensaje: ' + this.mensaje);
    this.enviado = true;
  }

  SalirDeRuta(): Observable<boolean> | boolean{
    // Cristerio para evitar que el usuario abandone el componente

    // Si mensaje no este vacio o enviado es true
    if(!this.mensaje || this.enviado){
      return true;
    }
    const confirmar = confirm ("Desea abandonar el formulario? \n Perdera todos los datos!!")
    return confirmar;
  }

}
