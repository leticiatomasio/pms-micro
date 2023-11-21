import { loadRemoteModule } from '@nrwl/angular/mf';
import { Route } from '@angular/router';
import { MainComponent } from './modules/main/main.component';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'pms-reservation',
        loadChildren: () =>
          loadRemoteModule('pms-reservation', './Module').then(
            (m) => m.MainModule
          ),
        },
      {
        path: '',
        loadChildren: () =>
          import('./modules/main.module').then((m) => m.MainModule),
      },
    ],
  },
];
