import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']

})
export class Punto1Component implements OnInit {
  de:string;
  para:number;
  texto:string;
  fecha:Date = new Date;;
  
  constructor() { 
    this.de=this.de;
    this.para=this.para;
    this.texto=this.texto;
  
  }

  public cantidadrestante(){
    return (120-this.texto.length);
  }


  ngOnInit(): void {
  }

}
