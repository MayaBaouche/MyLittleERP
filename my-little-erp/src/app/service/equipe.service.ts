import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  constructor(private httpClient: HttpClient) { }

  GetEquipe(): Observable<any> {
    return null;
  }
}
