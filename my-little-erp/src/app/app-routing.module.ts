
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import {HomeComponent} from './utils/home/home.component';
import {ErrorComponent} from './utils/error/error.component';
import {AboutComponent} from './utils/about/about.component';
import { DevisFormComponent } from './DevisForm/devis-form/devis-form.component';
import { AuthGuard } from './guard/auth.guard';
import { EquipeFormComponent } from './equipe-form/equipe-form.component';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

// routes
const appRoutes: Routes = [
  // home
  { path: '', component: HomeComponent
  },
  // login
    { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },
  // équipe
  { path: 'equipe', component: EquipeFormComponent // TODO change with right component name \o/
  },
  // devis
  { path: 'devis-list', component: DevisFormComponent , canActivate: [AuthGuard] // TODO change with right component name \o/
  },
  { path: 'devis-new', component: ErrorComponent // TODO change with right component name \o/
  },
  { path: 'devis-update', component: ErrorComponent // TODO change with right component name \o/
  },
  // commande
  { path: 'commande-list', component: ErrorComponent // TODO change with right component name \o/
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
