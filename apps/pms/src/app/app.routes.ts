import { NxWelcomeComponent } from './nx-welcome.component';
import { loadRemoteModule } from '@nrwl/angular/mf';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
  },
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
      (m) => m.RemoteEntryModule
    )
  },
];
