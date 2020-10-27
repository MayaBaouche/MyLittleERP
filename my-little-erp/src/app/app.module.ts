import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EquipeService } from './service/equipe.service';
import { DevisService } from './service/devis.service';
import { CommandeService } from './service/commande.service';
import { DevisFormComponent } from './DevisCreateForm/devis-form/devis-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DevisFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EquipeService, DevisService, CommandeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
