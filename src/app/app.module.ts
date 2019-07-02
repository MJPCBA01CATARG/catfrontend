import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectorComponent } from './sector/sector.component';
import { LugarComponent } from './lugar/lugar.component';

@NgModule({
  declarations: [
    AppComponent,
    SectorComponent,
    LugarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
