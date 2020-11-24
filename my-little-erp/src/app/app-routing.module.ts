
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import {HomeComponent} from './utils/home/home.component';
import {ErrorComponent} from './utils/error/error.component';
import {AboutComponent} from './utils/about/about.component';
import { DevisFormComponent } from './DevisForm/devis-form/devis-form.component';
import { CommandeFormComponent } from './CommandeForm/commande-form/commande-form.component';

// routes
const appRoutes: Routes = [
  // home
  { path: '', component: HomeComponent
  },
  // login
  { path: 'signin', component: ErrorComponent // TODO change with right component name \o/
  },
  // équipe
  { path: 'equipe', component: ErrorComponent // TODO change with right component name \o/
  },
  // devis
  { path: 'devis-list', component: DevisFormComponent // TODO change with right component name \o/
  },
  { path: 'devis-new', component: ErrorComponent // TODO change with right component name \o/
  },
  { path: 'devis-update', component: ErrorComponent // TODO change with right component name \o/
  },
  // commande
  { path: 'commande-list', component: CommandeFormComponent // TODO change with right component name \o/
  },
  { path: 'commande-new', component: ErrorComponent // TODO change with right component name \o/
  },
  { path: 'commande-update', component: ErrorComponent // TODO change with right component name \o/
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
