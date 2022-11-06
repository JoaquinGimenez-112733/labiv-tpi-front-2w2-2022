import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Empleado } from 'src/app/models/empleado';
import { Recibo } from 'src/app/models/recibo';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { ReciboService } from 'src/app/services/recibo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css'],
})
export class AltaComponent implements OnInit {
  formulario: FormGroup;
  empleados: any[];
  private subs = new Subscription();

  constructor(
    private recService: ReciboService,
    private empService: EmpleadoService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      ano: ['', Validators.required],
      mes: ['', Validators.required],
      sueldoBruto: ['', Validators.required],
      montoAntiguedad: ['', Validators.required],
      montoJubilacion: ['', Validators.required],
      montoObraSocial: ['', Validators.required],
      montoFAC: ['', Validators.required],
      empleado: ['', Validators.required],
    });

    this.subs.add(
      this.empService.getAllSimple().subscribe({
        next: (emps: any[]) => {
          this.empleados = emps;
        },
      })
    );
  }
  registrar() {
    this.subs.add(
      this.recService.postRecibo(this.formulario.value as Recibo).subscribe({
        next: () => {
          Swal.fire('Bien hecho!', 'Recibo registrado con exito.', 'success');
        },
        error: () => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se pudo registrar su recibo!',
          });
        },
      })
    );
  }
}
