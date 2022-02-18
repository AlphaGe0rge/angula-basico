import {Component} from '@angular/core';





@Component({
    selector:'app-contador',

    template: ` 
    <h1>{{title}}</h1>
    <h3>la base es: <strong>{{base}}</strong></h3>
  
    <button (click)='acumular(base)'>+{{base}}</button>
    <span> {{cont}} </span> 
    <button (click)="acumular(-base)">-{{base}}</button>
    `
})
export class ContadorComponent{
    title:string = 'bases';
    cont:number = 0;
    base:number = 5;
  
    acumular(valor:number){
      
    this.cont += valor;
  
    }
}