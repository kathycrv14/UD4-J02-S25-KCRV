import { Component } from '@angular/core';

@Component({
  selector: 'app-operacion',
  templateUrl: './operacion.component.html',
  styleUrls: ['./operacion.component.css']
})
export class OperacionComponent {

  valor1 = 0;
  valor2 = 0;
  operaciones = "ninguna";

  toggleSumar : boolean = false;
  toggleRestar : boolean = false;
  toggleMultiplicar : boolean = false;
  toggleDividir : boolean = false;

  resultado : number = 0;
  resultado1 : number = 0;
  resultado2 : number = 0;
  resultado3 : number = 0;

  tSumar(){
    if(this.toggleSumar) {
      this.resultado = this.valor1 + this.valor2;
    }else{
      this.resultado = 0;
    }
  }

  tRestar(){
    if(this.toggleRestar) {
      this.resultado1 = this.valor1 - this.valor2;
    }else{
      this.resultado1 = 0;
    }
  }

  tMultiplicar(){
    if(this.toggleMultiplicar) {
      this.resultado2 = this.valor1 * this.valor2;
    }else{
      this.resultado2 = 0;
    }
  }

  tDividir(){
    if(this.toggleDividir) {
      this.resultado3 = this.valor1 / this.valor2;
    }else{
      this.resultado3 = 0;
    }
  }
}
