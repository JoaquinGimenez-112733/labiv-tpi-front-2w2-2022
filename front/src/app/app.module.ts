import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoEComponent } from './empleado/listado/listado.component';
import { AltaEComponent } from './empleado/alta/alta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpleadoService } from './services/empleado.service';
import { ReciboService } from './services/recibo.service';
import { HttpClientModule } from '@angular/common/http';
import { ListadoComponent } from './recibo/listado/listado.component';
import { AltaComponent } from './recibo/alta/alta.component';
@NgModule({
  declarations: [
    AppComponent,
    ListadoEComponent,
    AltaEComponent,
    ListadoComponent,
    AltaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [EmpleadoService, ReciboService],
  bootstrap: [AppComponent],
})
export class AppModule {}
