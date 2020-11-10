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

import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './utils/about/about.component';
import { ErrorComponent } from './utils/error/error.component';
import { HomeComponent } from './utils/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ErrorComponent,
    FooterComponent,
    HeaderComponent,
    WelcomeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EquipeService, DevisService, CommandeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
