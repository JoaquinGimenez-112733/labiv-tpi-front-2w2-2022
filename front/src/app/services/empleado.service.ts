import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Empleado } from '../models/empleado';
@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  dominio = 'empleados/';
  apiURL = `${environment.base_URL}${this.dominio}`;
  sb: any;
  constructor(private _http: HttpClient) {}

  getAll(): Observable<Empleado[]> {
    return this._http.get<Empleado[]>(this.apiURL);
  }
  getAllSimple(): Observable<any> {
    return this._http.get(`${environment.base_URL}emp`);
  }
  getEmpleadoByLegajo(legajo: number): Observable<any> {
    return this._http.get(environment.base_URL + 'empexist?legajo=' + legajo);
  }

  getAllFiltered(legajo: number): Observable<any> {
    // this._http.get<Empleado[]>(this.apiURL).subscribe({
    //   next: (emps: Empleado[]) => {
    //     this.sb = emps.find((a) => a.legajo == legajo)?.sueldoBruto;
    //   },
    // });

    return this._http
      .get<Empleado[]>(this.apiURL)
      .pipe(map((a) => a.find((b) => b.legajo == legajo)?.sueldoBruto));
  }

  postEmpleado(emp: Empleado): Observable<any> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    return this._http.post(this.apiURL, emp, {
      headers: headers,
      responseType: 'text',
    });
  }
}
