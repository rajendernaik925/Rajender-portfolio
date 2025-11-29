import { Route } from "@angular/router";
import { BaseLayoutComponent } from "../base-layout/base-layout.component";

export const Routes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./home/home.component').then(c => c.HomeComponent),
      },
       {
        path: 'contact',
        loadComponent: () => import('./contact/contact.component').then(c => c.ContactComponent),
      },
      {
        path: 'about',
        loadComponent: () => import('./about/about.component').then(c => c.AboutComponent),
      },
      {
        path: 'service',
        loadComponent: () => import('./services/services.component').then(c => c.ServicesComponent),
      },
      {
        path: 'portfolio',
        loadComponent: () => import('./port-folio/port-folio.component').then(c => c.PortFolioComponent),
      },
    ]
  },
];

