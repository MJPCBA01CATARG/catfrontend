import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectorComponent } from './sector/sector.component';

import { TurnosComponent } from './turnos/turnos.component';


import { LugarComponent } from './lugar/lugar.component';
import { CategoriaempleadoComponent } from './categoriaempleado/categoriaempleado.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { LoginComponent } from './login/login.component';
import { FuncionesComponent } from './funciones/funciones.component';
import { ListaempleadosComponent } from './listaempleados/listaempleados.component';
import { EmpleadosComponent } from './empleados/empleados.component';



@NgModule({
  declarations: [
    AppComponent,
    SectorComponent,
    TurnosComponent,
    LugarComponent,
    CategoriaempleadoComponent,

    LoginComponent,
    FuncionesComponent,
    EmpresaComponent,
    ListaempleadosComponent,
    EmpleadosComponent
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
