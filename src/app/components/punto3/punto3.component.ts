import { Component, OnInit } from '@angular/core';
import { Pasaje } from 'src/app/models/pasaje';
import { VentasService } from 'src/app/services/ventas.service';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {

  venta:Pasaje;
  vector_ventas:Array<Pasaje>;
  precio_descuento:number=0;
  precio_actual:number=0;
  mostrar:boolean=false;
  cantidadjubilados:number=0;
  cantidadmenores:number=0;
  cantidadadultos:number=0;
  
  constructor(private ventaservice: VentasService) { 
    this.venta=new Pasaje();
    this.vector_ventas=new Array<Pasaje>();
    this.listarventas();
    
  }

  ngOnInit(): void {
  }

  public guardarvta(){
    this.venta.fechacompra= new Date();
    this.ventaservice.guardarvta(this.venta);
    this.venta=new Pasaje();
    this.mostrar=false;
    this.precio_descuento=0;
    this.precio_actual=0;
    
  }

  public listarventas(){
    this.vector_ventas=this.ventaservice.listarventas();
  }

  public limpiarvta(){
    this.venta= new Pasaje();
  }

  public calcularValor(){
    if(this.venta.categoriapasajero=='Menor'){
      this.precio_descuento=(this.venta.precio * 25)/100;
      this.precio_actual=this.venta.precio - this.precio_descuento;
      this.mostrar=true;
      this.cantidadmenores++;
      
    }

    if(this.venta.categoriapasajero=='Jubilado'){
      this.precio_descuento=(this.venta.precio)/2;
      this.precio_actual=this.venta.precio - this.precio_descuento;
      this.mostrar=true;
      this.cantidadjubilados++;
      
    }

    if(this.venta.categoriapasajero=='Adulto'){
      this.cantidadadultos++;
    }
  }

  
}
