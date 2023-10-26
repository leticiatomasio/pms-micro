import { Injectable, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as ReservationActions from './reservation.actions';
import * as ReservationSelectors from './reservation.selectors';

@Injectable()
export class ReservationFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(
    select(ReservationSelectors.selectReservationLoaded)
  );
  allReservation$ = this.store.pipe(
    select(ReservationSelectors.selectAllReservation)
  );
  selectedReservation$ = this.store.pipe(
    select(ReservationSelectors.selectEntity)
  );
  selectedError$ = this.store.pipe(
    select(ReservationSelectors.selectReservationError)
  );

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(ReservationActions.initReservation());
  }
}
