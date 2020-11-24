import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { from } from 'rxjs';
import {RouterModule,Routes} from '@angular/router'

import { AppComponent } from './app.component';

import { FooterComponent } from './formcomponent/footer/footer.component';
import { HeaderComponent } from './formcomponent/header/header.component';
import { WelcomeComponent } from './formcomponent/welcome/welcome.component';

import { EquipeService } from './service/equipe.service';
import { DevisService } from './service/devis.service';
import { CommandeService } from './service/commande.service';
import { DevisFormComponent } from './DevisForm/devis-form/devis-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './utils/about/about.component';
import { ErrorComponent } from './utils/error/error.component';
import { HomeComponent } from './utils/home/home.component';
import { CommandeFormComponent } from './CommandeForm/commande-form/commande-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ErrorComponent,
    FooterComponent,
    HeaderComponent,
    WelcomeComponent,
    HomeComponent,
	DevisFormComponent,
	CommandeFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
	AppRoutingModule
  ],
  providers: [EquipeService, DevisService, CommandeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
