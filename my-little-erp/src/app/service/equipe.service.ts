import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EquipeResponseModel, MemberResponseModel } from '../api-model/equipe-response-model';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  constructor(private httpClient: HttpClient) { }

  GetEquipe(): Observable<EquipeResponseModel[]> {
    return this.httpClient.get<EquipeResponseModel[]>
      (environment.api.url + environment.api.routes.equipe);
  }
}
