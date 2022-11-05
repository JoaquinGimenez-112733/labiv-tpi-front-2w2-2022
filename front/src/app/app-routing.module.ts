import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaEComponent } from './empleado/alta/alta.component';
import { ListadoEComponent } from './empleado/listado/listado.component';

const routes: Routes = [
  { path: 'listadoE', component: ListadoEComponent },
  { path: 'altaE', component: AltaEComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
