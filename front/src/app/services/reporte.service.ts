import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { ReporteAreas } from '../models/reporteAreas';
@Injectable({
  providedIn: 'root',
})
export class ReporteService {
  dominio = 'recib/';
  apiURL = `${environment.base_URL}${this.dominio}`;
  constructor(private _http: HttpClient) {}

  getReportePorPeriodo(r: ReporteAreas): Observable<any> {
    return this._http.get(`${this.apiURL}?ano=${r.ano}&mes=${r.mes}`);
  }
}
