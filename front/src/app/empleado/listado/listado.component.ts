import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoEComponent implements OnInit {
  private subs = new Subscription();
  empleados: Empleado[] = [];
  constructor(private empService: EmpleadoService, private router: Router) {}

  ngOnInit(): void {
    this.subs.add(
      this.empService.getAll().subscribe({
        next: (emps: Empleado[]) => {
          this.empleados = emps;
        },
      })
    );
  }

  nuevo() {
    this.router.navigateByUrl('/altaE');
  }
}
