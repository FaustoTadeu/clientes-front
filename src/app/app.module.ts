import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableVendedoresComponent } from './table-vendedores/table-vendedores.component';
import { MatTableModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    TableVendedoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
