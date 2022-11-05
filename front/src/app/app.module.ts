import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoEComponent } from './empleado/listado/listado.component';
import { AltaEComponent } from './empleado/alta/alta.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmpleadoService } from './services/empleado.service';
import { ReciboService } from './services/recibo.service';
import { HttpClientModule } from '@angular/common/http';
import { ListadoComponent } from './recibo/listado/listado.component';
@NgModule({
  declarations: [
    AppComponent,
    ListadoEComponent,
    AltaEComponent,
    ListadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [EmpleadoService, ReciboService],
  bootstrap: [AppComponent],
})
export class AppModule {}
