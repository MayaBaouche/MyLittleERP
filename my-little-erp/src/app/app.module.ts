import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './formcomponent/footer/footer.component';
import { HeaderComponent } from './formcomponent/header/header.component';
import { from } from 'rxjs';
import { WelcomeComponent } from './formcomponent/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    WelcomeComponent
    ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
