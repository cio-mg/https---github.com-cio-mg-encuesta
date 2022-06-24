import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocentesComponent } from './docentes/docentes.component';
import { AdministrativosComponent } from './administrativos/administrativos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PartedosComponent } from './partedos/partedos.component';
import { PartetresComponent } from './partetres/partetres.component';
import { PartecuatroComponent } from './partecuatro/partecuatro.component';

@NgModule({
  declarations: [
    AppComponent,
    DocentesComponent,
    AdministrativosComponent,
    ServiciosComponent,
    NavbarComponent,
    HomeComponent,
    PartedosComponent,
    PartetresComponent,
    PartecuatroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
