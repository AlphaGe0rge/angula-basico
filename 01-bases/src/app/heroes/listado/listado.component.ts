import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'

})
export class ListadoComponent{
 
heroes: string[]=['ironman','spiderman','hulk','thor'];
heroeBorrado= "";

borrarHeroe(){
this.heroeBorrado=this.heroes.shift() || "";
}



}
