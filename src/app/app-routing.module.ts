import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TurnosComponent } from './turnos/turnos.component';


const routes: Routes = [{ path: 'turnos', component: TurnosComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
 export class AppRoutingModule { }

export const appRoutingProvider : any [] = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(routes);
