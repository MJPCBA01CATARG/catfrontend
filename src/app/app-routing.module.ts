import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TurnosComponent } from './turnos/turnos.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { FuncionesComponent } from './funciones/funciones.component';
import { CategoriaempleadoComponent } from './categoriaempleado/categoriaempleado.component';
import { LugarComponent } from './lugar/lugar.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { SectorComponent } from './sector/sector.component';
import { ControldeasistenciaComponent } from './controldeasistencia/controldeasistencia.component';
import { ListaempleadosComponent } from './listaempleados/listaempleados.component';
import { ListaempresaComponent } from './listaempresa/listaempresa.component';
import { ListafuncionesComponent } from './listafunciones/listafunciones.component';
import { ListalugarComponent } from './listalugar/listalugar.component';
import { ListasectorComponent } from './listasector/listasector.component';
import { ListaturnosComponent } from './listaturnos/listaturnos.component';
import { LoginComponent } from './login/login.component';
import { MenugeneralComponent } from './menugeneral/menugeneral.component';
import { CargadianolaborablesComponent } from './cargadianolaborables/cargadianolaborables.component';
import { ListahorasautorizadasComponent } from './listahorasautorizadas/listahorasautorizadas.component';





const routes: Routes = [
  { path: 'turnos', component: TurnosComponent },
  { path: 'empleados', component: EmpleadosComponent },
  { path: 'funciones', component: FuncionesComponent },
  { path: 'categoriaempleado', component: CategoriaempleadoComponent },
  { path: 'lugar', component: LugarComponent },
  { path: 'empresa', component: EmpresaComponent },
  { path: 'sector', component: SectorComponent },
  { path: 'controldeasistencia', component: ControldeasistenciaComponent },
  { path: 'listaempleados', component: ListaempleadosComponent },
  { path: 'listaempresa', component: ListaempresaComponent },
  { path: 'listafunciones', component: ListafuncionesComponent },
  { path: 'listalugar', component: ListalugarComponent },
  { path: 'listasector', component: ListasectorComponent },
  { path: 'listaturnos', component: ListaturnosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menugeneral', component: MenugeneralComponent },
  { path: 'cargadianolaborables', component: CargadianolaborablesComponent },
  { path: 'listahorasautorizadas', component: ListahorasautorizadasComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
 export class AppRoutingModule { }

export const appRoutingProvider : any [] = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(routes);
