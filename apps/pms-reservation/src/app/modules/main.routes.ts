import { Route } from '@angular/router';

export const mainRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'individual',
    pathMatch: 'full'
  },
  {
    path: 'individual',
    loadChildren: () =>
      import('./individual/individual.module').then((m) => m.IndividualModule),
  },
];
