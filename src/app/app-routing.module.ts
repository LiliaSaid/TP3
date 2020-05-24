import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Punto1Component} from './components/punto1/punto1.component';

import { Punto3Component} from './components/punto3/punto3.component';
import { Punto4Component} from './components/punto4/punto4.component';
import { HeaderComponent} from './components/header/header.component';
import { HomeComponent} from './components/home/home.component';
import { FooterComponent} from './components/footer/footer.component';
import { DatatablesClientsComponent} from "./components/datatables-clients/datatables-clients.component";
const routes: Routes = [
  {path: 'punto1', component:Punto1Component},  
  {path: 'punto3', component:Punto3Component},
  {path: 'punto4', component:Punto4Component},
  {path: 'header', component:HeaderComponent},
  {path: 'home', component:HomeComponent},
  {path: 'footer', component:FooterComponent},
  {path: 'dataclient', component:DatatablesClientsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
