import { Component } from "@angular/core";




@Component({
selector:'app-heroe',

templateUrl:'heroe.component.html'

})

export class HeroeComponent{

nombre: string = "Ironman";
edad: number = 45;

nombreCompleto(){
    return `${this.nombre} - ${this.edad}`;
};
get capitalizado(){
return this.nombre.toUpperCase();
}

cambiarNombre(){
    return this.nombre="Spiderman";
}
cambiarEdad(){
    return this.edad=30;
}

}