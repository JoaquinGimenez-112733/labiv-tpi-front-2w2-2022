import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Recibo } from '../models/recibo';
@Injectable({
  providedIn: 'root',
})
export class ReciboService {
  dominio = 'recibos/';
  apiURL = `${environment.base_URL}${this.dominio}`;
  constructor(private _http: HttpClient) {}

  getReciboByLegajo(legajo: number): Observable<Recibo[]> {
    return this._http.get<Recibo[]>(this.apiURL + legajo);
  }

  postRecibo(recibo: Recibo): Observable<any> {
    return this._http.post(this.apiURL, recibo, { responseType: 'text' });
  }
}
