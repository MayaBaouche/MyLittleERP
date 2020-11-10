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


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    WelcomeComponent
      ],
  imports: [
    BrowserModule,
   
  ],
  providers: [EquipeService, DevisService, CommandeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
