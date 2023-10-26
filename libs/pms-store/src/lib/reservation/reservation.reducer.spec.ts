import { Action } from '@ngrx/store';

import * as ReservationActions from './reservation.actions';
import { ReservationEntity } from './reservation.models';
import {
  ReservationState,
  initialReservationState,
  reservationReducer,
} from './reservation.reducer';

describe('Reservation Reducer', () => {
  const createReservationEntity = (
    id: string,
    name = ''
  ): ReservationEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Reservation actions', () => {
    it('loadReservationSuccess should return the list of known Reservation', () => {
      const reservation = [
        createReservationEntity('PRODUCT-AAA'),
        createReservationEntity('PRODUCT-zzz'),
      ];
      const action = ReservationActions.loadReservationSuccess({ reservation });

      const result: ReservationState = reservationReducer(
        initialReservationState,
        action
      );

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reservationReducer(initialReservationState, action);

      expect(result).toBe(initialReservationState);
    });
  });
});
