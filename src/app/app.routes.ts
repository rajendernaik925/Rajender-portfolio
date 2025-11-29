import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./auth/auth.routes').then(m => m.Routes),
  },
  {
    path:'**',
    component:PageNotFoundComponent
  },
];
