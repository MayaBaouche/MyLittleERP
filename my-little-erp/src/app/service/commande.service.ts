import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CommandeResponseModel } from '../api-model/commande-response-model';
import { CommandeRequestModel } from '../api-model/commande-request-model';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private httpClient: HttpClient) { }

  GetCommande(): Observable<CommandeResponseModel[]> {
    return this.httpClient.get<CommandeResponseModel[]>
      (environment.api.url + environment.api.routes.commande);
  }

  CreateCommande(payload: CommandeRequestModel): Observable<CommandeResponseModel> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.post<CommandeResponseModel>
      (environment.api.url + environment.api.routes.commande, payload, httpOptions);
  }

  UpdateCommande(payload: CommandeRequestModel, id: string): Observable<CommandeResponseModel> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.put<CommandeResponseModel>
      (environment.api.url + environment.api.routes.commande + "/" + id, payload, httpOptions);
  }

  DeleteCommande(id: string): Observable<any> {

    return this.httpClient.delete<any>
      (environment.api.url + environment.api.routes.commande + "/" + id);
  }
}
