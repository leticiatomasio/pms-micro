import { Injectable, inject } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as PropertyActions from './property.actions';
import * as PropertyFeature from './property.reducer';
import * as PropertySelectors from './property.selectors';

@Injectable()
export class PropertyFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(PropertySelectors.selectPropertyLoaded));
  allProperty$ = this.store.pipe(select(PropertySelectors.selectAllProperty));
  selectedProperty$ = this.store.pipe(select(PropertySelectors.selectEntity));

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(PropertyActions.initProperty());
  }
}
