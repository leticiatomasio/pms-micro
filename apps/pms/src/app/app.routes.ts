import { loadRemoteModule } from '@nrwl/angular/mf';
import { Route } from '@angular/router';
import { MainComponent } from './modules/main/main.component';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'pms-availability',
        loadChildren: () => loadRemoteModule('pms-availability', './Module').then(
          (m) => m.RemoteEntryModule
        ),
      },
      {
        path: 'pms-cash-operation',
        loadChildren: () => loadRemoteModule('pms-cash-operation', './Module').then(
          (m) => m.RemoteEntryModule
       ),
      },
      {
        path: 'pms-reservation',
        loadChildren: () => loadRemoteModule('pms-reservation', './Module').then(
          (m) => m.MainModule
        )
      },
      {
        path: '',
        loadChildren: () =>
          import('./modules/main.module').then((m) => m.MainModule),
      },
   ]
  },

];
