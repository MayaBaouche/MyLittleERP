import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DevisResponseModel } from '../api-model/devis-response-model';
import { DevisRequestModel } from '../api-model/devis-request-model';
import { environment } from '../../environments/environment.prod';

const httpHeaders= {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DevisService {

  constructor(private httpClient: HttpClient) { }

  GetDevis(): Observable<DevisResponseModel[]> {
    return this.httpClient.get<DevisResponseModel[]>
      (environment.api.url + environment.api.routes.devis, {headers: httpHeaders.headers});
  }

  GetDevisById(id : number): Observable<DevisResponseModel> {
    return this.httpClient.get<DevisResponseModel>
      (environment.api.url + environment.api.routes.devis+"/"+id);
  }

  CreateDevis(payload: DevisRequestModel): Observable<DevisResponseModel> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.post<DevisResponseModel>
      (environment.api.url + environment.api.routes.devis, payload, httpOptions);
  }

  UpdateDevis(payload: DevisRequestModel, id:string): Observable<DevisResponseModel> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.put<DevisResponseModel>
      (environment.api.url + environment.api.routes.devis + "/" + id, payload, httpOptions);
  }

  DeleteDevis(id: string) : Observable<any>{

    return this.httpClient.delete<any>
      (environment.api.url + environment.api.routes.devis + "/" + id);
  }
}
