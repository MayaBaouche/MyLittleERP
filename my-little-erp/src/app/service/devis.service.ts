import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
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
      (environment.api.url + environment.api.routes.devis, payload, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  UpdateDevis(payload: DevisRequestModel, id:string): Observable<DevisResponseModel> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.put<DevisResponseModel>
      (environment.api.url + environment.api.routes.devis + "/" + id, payload, httpOptions).pipe(
        catchError(this.handleError)
      );
  }

  DeleteDevis(id: string) : Observable<any>{
    return this.httpClient.delete<any>
      (environment.api.url + environment.api.routes.devis + "/" + id)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, `  +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
