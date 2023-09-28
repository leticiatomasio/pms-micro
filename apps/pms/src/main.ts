import { setRemoteDefinitions } from '@nrwl/angular/mf';

fetch('/assets/json/module-federation.manifest.json')
  .then((res) => res.json())
  .then((definitions) => setRemoteDefinitions(definitions))
  .then(() => import('./bootstrap').catch((err) => console.error(err)));
