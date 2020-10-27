import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './formcomponent/footer/footer.component';
import { HeaderComponent } from './formcomponent/header/header.component';
import { from } from 'rxjs';
import {RouterModule,Routes} from '@angular/router'
import { WelcomeComponent } from './formcomponent/welcome/welcome.component';

const routes: Routes = [
  {
    path:'',
    component:WelcomeComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    WelcomeComponent
      ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
