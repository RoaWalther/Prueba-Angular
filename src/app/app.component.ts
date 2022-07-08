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
  public miarray;
  
  services: any;

 public ejecutar(inputValue:number){
    this.numero = inputValue;
    this.miarray = Array.from({length: this.numero}, () => Math.floor(Math.random() * 100));
    let sms = 'numeros aleatorios: '+this.miarray+"\n";
    let ordenados = this.miarray.sort( function ordenar(elem1, elem2) {return elem1-elem2;});
    let total = sms+ 'numeros ordenados: '+ ordenados;
    this.imprimir(total);
  }
  imprimir(valor){
    alert(valor);
    this.resultado=valor;
  }

}
