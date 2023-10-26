import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/main.module').then((m) => m.MainModule),
  }
];
