import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaEComponent } from './empleado/alta/alta.component';
import { ListadoEComponent } from './empleado/listado/listado.component';
import { AltaComponent } from './recibo/alta/alta.component';
import { ListadoComponent } from './recibo/listado/listado.component';
import { ReportesComponent } from './reportes/reportes/reportes.component';

const routes: Routes = [
  { path: 'listadoE', component: ListadoEComponent },
  { path: 'altaE', component: AltaEComponent },
  { path: 'listadoR', component: ListadoComponent },
  { path: 'altaR', component: AltaComponent },
  { path: 'reportes', component: ReportesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
