import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatables-clients',
  templateUrl: './datatables-clients.component.html',
  styleUrls: ['./datatables-clients.component.css']
})
export class DatatablesClientsComponent implements OnInit {
  asistentes: Array<any>;
  usuario: '';
  nombreOrganizacion:"";
  constancia:boolean;
  constructor() {
    this.asistentes = [
      {
      "usuario": "jose@gmail.com",
      "nombreOrganizacion": "Facultad de Humanidades",
      "constancia": true,
      },
      {
      "usuario": "marta@gmail.com",
      "nombreOrganizacion": "Facultad de Cs Economicas",
      "constancia": false,
      },
      {
      "usuario": "martin@gmail.com",
      "nombreOrganizacion": "Facultad de Agrarias",
      "constancia": true,
      
      },
    ]
}

  decirAdios(){
  alert("Desea Registrarse");
  console.log(this.usuario,this.nombreOrganizacion,this.constancia);
  this.asistentes.push({usuario:this.usuario,nombreOrganizacion:this.nombreOrganizacion,constancia:this.constancia});
  return false;
  }

  ngOnInit(): void {
  }

}
