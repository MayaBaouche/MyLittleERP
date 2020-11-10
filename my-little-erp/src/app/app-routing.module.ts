
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
  // login
  { path: 'signin', component: ErrorComponent
  },
  // équipe
  { path: 'equipe', component: ErrorComponent
  },
  // devis
  { path: 'devis-list', component: ErrorComponent
  },
  { path: 'devis-new', component: ErrorComponent
  },
  { path: 'devis-update', component: ErrorComponent
  },
  // commande
  { path: 'commande-list', component: ErrorComponent
  },
  { path: 'commande-new', component: ErrorComponent
  },
  { path: 'commande-update', component: ErrorComponent
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
