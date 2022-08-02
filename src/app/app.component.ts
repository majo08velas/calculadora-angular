import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora Angular';
  number1:number=0;
  number2:number=0;
  resultado:number=0;

  sumar(){
    
    this.resultado = this.number1 + this.number2;
  }

  restar(){
    this.resultado = this.number1 - this.number2;
  }

  mult(){
    
    this.resultado = this.number1 * this.number2;
  }

  div(){
    this.resultado = this.number1 / this.number2;
  }
}
