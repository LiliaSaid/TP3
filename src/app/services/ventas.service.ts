import { Injectable } from '@angular/core';
import { Pasaje } from 'src/app/models/pasaje';

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  vector_ventas:Array<Pasaje>;

  constructor() { 
    this.vector_ventas=new Array<Pasaje>();
  }

  listarventas(){
    return this.vector_ventas;
  }

  guardarvta(venta: Pasaje){
    this.vector_ventas.push(venta);
  }
}
