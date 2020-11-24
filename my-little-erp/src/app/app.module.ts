import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { fakeBackendProvider } from 'src/app/helpers/fake-backend';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { from } from 'rxjs';
import {RouterModule,Routes} from '@angular/router'
import { JwtInterceptor } from 'src/app/helpers/jwt.interceptor';
import { AppComponent } from './app.component';

import { FooterComponent } from './formcomponent/footer/footer.component';
import { HeaderComponent } from './formcomponent/header/header.component';
import { WelcomeComponent } from './formcomponent/welcome/welcome.component';

import { EquipeService } from './service/equipe.service';
import { DevisService } from './service/devis.service';
import { CommandeService } from './service/commande.service';
import { DevisFormComponent } from './DevisForm/devis-form/devis-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountService } from 'src/app/service/account.service';

import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './utils/about/about.component';
import { ErrorComponent } from './utils/error/error.component';
import { HomeComponent } from './utils/home/home.component';



@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private accountService: AccountService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.accountService.logout();
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ErrorComponent,
    FooterComponent,
    HeaderComponent,
    WelcomeComponent,
    HomeComponent,
	DevisFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
	AppRoutingModule
  ],
  providers: [EquipeService,
              DevisService,
              CommandeService,
              { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
              { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
              fakeBackendProvider
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
