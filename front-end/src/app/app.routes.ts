import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'ordem-de-servico',
    loadComponent: () =>
      import('./pages/os/os.component').then((m) => m.OsComponent),
  },
  {
    path: 'clients',
    loadComponent: () =>
      import('./pages/clients/clients.component').then(
        (m) => m.ClientsComponent,
      ),
  },
  {
    path: 'technicians',
    loadComponent: () =>
      import('./pages/technicians/technicians.component').then(
        (m) => m.TechniciansComponent,
      ),
  },
  {
    path: 'profile',
    loadComponent: () => {
      return import('./pages/profile/profile.component').then(
        (m) => m.ProfileComponent,
      );
    },
  },
];
