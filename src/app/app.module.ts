import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectorComponent } from './sector/sector.component';
import { LugarComponent } from './lugar/lugar.component';
import { CategoriaempleadoComponent } from './categoriaempleado/categoriaempleado.component';
@NgModule({
  declarations: [
    AppComponent,
    SectorComponent,
    LugarComponent,
    CategoriaempleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
