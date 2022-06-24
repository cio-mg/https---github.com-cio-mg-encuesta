import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DocentesComponent } from './docentes/docentes.component';
import { AdministrativosComponent } from './administrativos/administrativos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PartedosComponent } from './partedos/partedos.component';
import { PartetresComponent } from './partetres/partetres.component';
import { PartecuatroComponent } from './partecuatro/partecuatro.component';

const routes: Routes = [ {path: '', component:HomeComponent, pathMatch:'full'},
{path: 'docentes', component:DocentesComponent, pathMatch:'full'},
{path: 'administrativos', component:AdministrativosComponent, pathMatch:'full'},
{path: 'servicios', component:ServiciosComponent, pathMatch:'full'},
{path: 'partedos', component:PartedosComponent, pathMatch:'full'},
{path: 'partetres', component:PartetresComponent, pathMatch:'full'},
{path: 'partecuatro', component:PartecuatroComponent, pathMatch:'full'},
{path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
