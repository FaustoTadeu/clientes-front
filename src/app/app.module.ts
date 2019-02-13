import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableVendedoresComponent } from './table-vendedores/table-vendedores.component';
import { MatTableModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { TableClientesComponent } from './table-clientes/table-clientes.component';
import { DialogClientesComponent, DialogClientesDialog } from './dialog-clientes/dialog-clientes.component';
import { DialogVendedoresComponent, DialogVendedoresDialog } from './dialog-vendedores/dialog-vendedores.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { VendedoresService } from 'src/service/vendedores.service';
import { ClientesService } from 'src/service/clientes.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  entryComponents: [DialogVendedoresDialog, DialogClientesDialog],
  declarations: [
    AppComponent,
    TableVendedoresComponent,
    TableClientesComponent,
    DialogClientesComponent,
    DialogVendedoresComponent,
    DialogVendedoresDialog,
    DialogClientesDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule
  ],
  providers: [
    VendedoresService, 
    ClientesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
