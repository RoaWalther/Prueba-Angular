import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba';
  public numero: number;
  public resultado ='';
  
  services: any;

  public ejecutar(inputValue:number){
    this.numero = inputValue;
    let miarray = Array.from({length: this.numero}, () => Math.floor(Math.random() * 10));
    let sms = 'numeros aleatorios: '+miarray;
    alert(sms);
    var ordenados = miarray.sort( function deMayorAMenor(elem1, elem2) {return elem1-elem2;});
    this.imprimir(ordenados);
  }
  imprimir(valor){
    let sms= 'numeros ordenados: '+ valor;
    alert(sms);
    this.resultado.includes(sms);
  }

}
