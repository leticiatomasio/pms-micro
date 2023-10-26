import { createAction, props } from '@ngrx/store';
import { ReservationEntity } from './reservation.models';

export const initReservation = createAction('[Reservation Page] Init');

export const loadReservationSuccess = createAction(
  '[Reservation/API] Load Reservation Success',
  props<{ reservation: ReservationEntity[] }>()
);

export const loadReservationFailure = createAction(
  '[Reservation/API] Load Reservation Failure',
  props<{ error: any }>()
);
