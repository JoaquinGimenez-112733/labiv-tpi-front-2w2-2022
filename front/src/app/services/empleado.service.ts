import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Empleado } from '../models/empleado';
@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  dominio = 'empleados/';
  apiURL = `${environment.base_URL}${this.dominio}`;
  constructor(private _http: HttpClient) {}

  getAll(): Observable<Empleado[]> {
    return this._http.get<Empleado[]>(this.apiURL);
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
