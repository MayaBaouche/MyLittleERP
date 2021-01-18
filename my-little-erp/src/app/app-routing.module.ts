
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import {HomeComponent} from './utils/home/home.component';
import {ErrorComponent} from './utils/error/error.component';
import {AboutComponent} from './utils/about/about.component';
import { DevisFormComponent } from './DevisForm/devis-form/devis-form.component';
import { ListDevisComponent } from './list-devis/list-devis.component';
import { CommandeFormComponent } from './commande-form/commande-form.component';
import { ListCommandeComponent } from './list-commande/list-commande.component';
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
  { path: 'equipe', component: EquipeFormComponent, canActivate: [AuthGuard]
  },
  // devis
  { path: 'devis-list', component: ListDevisComponent, canActivate: [AuthGuard]
  },
  { path: 'devis-new', component: DevisFormComponent, canActivate: [AuthGuard]
  },
  { path: 'devis-view/:id', component: DevisFormComponent , canActivate: [AuthGuard]
  },
  // commande
  { path: 'commande-list', component: ListCommandeComponent , canActivate: [AuthGuard]
  },
  { path: 'commande-new', component: CommandeFormComponent, canActivate: [AuthGuard]
  },
  { path: 'commande-view/:id', component: CommandeFormComponent , canActivate: [AuthGuard]
  },
  // others
  { path: 'about', component: AboutComponent
  },
  {
    path: 'account/register',
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
  },
  // errors
  { path: '404', component: ErrorComponent
  },
  { path: '**', component: ErrorComponent, canActivate: [AuthGuard]
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
