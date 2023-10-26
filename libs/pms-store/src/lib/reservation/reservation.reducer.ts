import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as ReservationActions from './reservation.actions';
import { ReservationEntity } from './reservation.models';

export const RESERVATION_FEATURE_KEY = 'reservation';

export interface ReservationState extends EntityState<ReservationEntity> {
  selectedId?: string | number; // which Reservation record has been selected
  loaded: boolean; // has the Reservation list been loaded
  error?: string | null; // last known error (if any)
}

export interface ReservationPartialState {
  readonly [RESERVATION_FEATURE_KEY]: ReservationState;
}

export const reservationAdapter: EntityAdapter<ReservationEntity> =
  createEntityAdapter<ReservationEntity>();

export const initialReservationState: ReservationState =
  reservationAdapter.getInitialState({
    // set initial required properties
    loaded: false,
  });

const reducer = createReducer(
  initialReservationState,
  on(ReservationActions.initReservation, (state) => ({
    ...state,
    loaded: false,
    error: 'error404',
  })),
  on(ReservationActions.loadReservationSuccess, (state, { reservation }) =>
    reservationAdapter.setAll(reservation, { ...state, loaded: true })
  ),
  on(ReservationActions.loadReservationFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reservationReducer(
  state: ReservationState | undefined,
  action: Action
) {
  return reducer(state, action);
}
