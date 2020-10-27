
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import {HomeComponent} from './utils/home/home.component';
import {ErrorComponent} from './utils/error/error.component';
import {AboutComponent} from './utils/about/about.component';

// routes
const appRoutes: Routes = [
  // home
  { path: '', component: HomeComponent
  },
  // others
  { path: 'about', component: AboutComponent
  },
  // errors
  { path: '404', component: ErrorComponent
  },
  { path: '**', component: ErrorComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
