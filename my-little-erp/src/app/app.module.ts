import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
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
