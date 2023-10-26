import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  RESERVATION_FEATURE_KEY,
  ReservationState,
  reservationAdapter,
} from './reservation.reducer';

// Lookup the 'Reservation' feature state managed by NgRx
export const selectReservationState = createFeatureSelector<ReservationState>(
  RESERVATION_FEATURE_KEY
);

const { selectAll, selectEntities } = reservationAdapter.getSelectors();

export const selectReservationLoaded = createSelector(
  selectReservationState,
  (state: ReservationState) => state.loaded
);

export const selectReservationError = createSelector(
  selectReservationState,
  (state: ReservationState) => state.error
);

export const selectAllReservation = createSelector(
  selectReservationState,
  (state: ReservationState) => selectAll(state)
);

export const selectReservationEntities = createSelector(
  selectReservationState,
  (state: ReservationState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectReservationState,
  (state: ReservationState) => state.selectedId
);

export const selectEntity = createSelector(
  selectReservationEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
