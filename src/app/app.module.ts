import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing , appRoutingProvider} from './app-routing.module'
import { HttpClientModule } from '@angular/common/http';

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
import { ListalugarComponent } from './listalugar/listalugar.component';
import { ListaempresaComponent } from './listaempresa/listaempresa.component';
import { ControldeasistenciaComponent } from './controldeasistencia/controldeasistencia.component';
import { ListafuncionesComponent } from './listafunciones/listafunciones.component';
import { ListasectorComponent } from './listasector/listasector.component';
import { ListaturnosComponent } from './listaturnos/listaturnos.component';
import { MenugeneralComponent } from './menugeneral/menugeneral.component';
import { CargadianolaborablesComponent } from './cargadianolaborables/cargadianolaborables.component';
import { ListahorasautorizadasComponent } from './listahorasautorizadas/listahorasautorizadas.component';




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
    EmpleadosComponent,
    ListalugarComponent,
    ListaempresaComponent,
    ControldeasistenciaComponent,
    ListafuncionesComponent,
    ListasectorComponent,
    ListaturnosComponent,
    MenugeneralComponent,
    CargadianolaborablesComponent,
    ListahorasautorizadasComponent
    

   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    routing
  ],
  providers: [appRoutingProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
