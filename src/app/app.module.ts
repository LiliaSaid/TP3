import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { FormsModule } from '@angular/forms';
import { Punto3Component } from './components/punto3/punto3.component';
import { Punto4Component } from './components/punto4/punto4.component';
import { Punto5Component } from './components/punto5/punto5.component';
import { NgxDataTableModule} from "angular-9-datatable";
import { DatatablesClientsComponent } from './components/datatables-clients/datatables-clients.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    Punto1Component,
    
    Punto3Component,
    Punto4Component,
    Punto5Component,
    DatatablesClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDataTableModule,
    FormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
