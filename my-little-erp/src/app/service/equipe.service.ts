import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EquipeModel, MemberModel } from '../api-model/equipe-model';
import { environment } from '../env';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  constructor(private httpClient: HttpClient) { }

  GetEquipe(): Observable<EquipeModel> {
    return this.httpClient.get<EquipeModel[]>
      (environment.api.url + environment.api.routes.equipe);
  }
}
