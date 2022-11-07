import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { catchError, map, Observable, of } from 'rxjs';
import { EmpleadoService } from './empleado.service';

@Injectable({ providedIn: 'root' })
export class legajoValidator implements AsyncValidator {
  constructor(private empService: EmpleadoService) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.empService.getEmpleadoByLegajo(control.value).pipe(
      map((isTakenasdasd) => (isTakenasdasd ? { legajoExists: true } : null)),
      catchError(() => of(null))
    );
  }
}
