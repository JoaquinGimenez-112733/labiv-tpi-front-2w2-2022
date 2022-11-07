import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmpleadoService } from 'src/app/services/empleado.service';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Empleado } from 'src/app/models/empleado';
import { debounceTime, finalize, map, switchMap, tap } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { legajoValidator } from 'src/app/services/legajoValidator';
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
    private fb: FormBuilder,
    private legValidator: legajoValidator
  ) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      legajo: [
        '',
        {
          Validators: ['', Validators.required],
          asyncValidators: [this.legValidator],
          updateOn: 'blur',
        },
      ],
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
