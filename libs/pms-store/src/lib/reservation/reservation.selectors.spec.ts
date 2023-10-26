import { ReservationEntity } from './reservation.models';
import {
  reservationAdapter,
  ReservationPartialState,
  initialReservationState,
} from './reservation.reducer';
import * as ReservationSelectors from './reservation.selectors';

describe('Reservation Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getReservationId = (it: ReservationEntity) => it.id;
  const createReservationEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as ReservationEntity);

  let state: ReservationPartialState;

  beforeEach(() => {
    state = {
      reservation: reservationAdapter.setAll(
        [
          createReservationEntity('PRODUCT-AAA'),
          createReservationEntity('PRODUCT-BBB'),
          createReservationEntity('PRODUCT-CCC'),
        ],
        {
          ...initialReservationState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Reservation Selectors', () => {
    it('selectAllReservation() should return the list of Reservation', () => {
      const results = ReservationSelectors.selectAllReservation(state);
      const selId = getReservationId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = ReservationSelectors.selectEntity(
        state
      ) as ReservationEntity;
      const selId = getReservationId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectReservationLoaded() should return the current "loaded" status', () => {
      const result = ReservationSelectors.selectReservationLoaded(state);

      expect(result).toBe(true);
    });

    it('selectReservationError() should return the current "error" state', () => {
      const result = ReservationSelectors.selectReservationError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
