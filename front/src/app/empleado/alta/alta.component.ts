import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Empleado } from 'src/app/models/empleado';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css'],
})
export class AltaEComponent implements OnInit {
  private subs = new Subscription();
  formulario: FormGroup;
  constructor(
    private empService: EmpleadoService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      legajo: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      fechaIngreso: ['', Validators.required],
      area: ['', Validators.required],
      sueldoBruto: ['', Validators.required],
    });
  }

  registrar() {
    if (this.formulario.valid) {
      this.subs.add(
        this.empService
          .postEmpleado(this.formulario.value as Empleado)
          .subscribe({
            next: () => {
              Swal.fire(
                'Bien hecho!',
                'Empleado registrado con exito.',
                'success'
              );
            },
            error: () => {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se pudo dar de alta el empleado!',
              });
            },
          })
      );
    }
  }
}
