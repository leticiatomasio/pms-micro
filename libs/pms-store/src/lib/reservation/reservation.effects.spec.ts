import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as ReservationActions from './reservation.actions';
import { ReservationEffects } from './reservation.effects';

describe('ReservationEffects', () => {
  let actions: Observable<Action>;
  let effects: ReservationEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        ReservationEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(ReservationEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: ReservationActions.initReservation() });

      const expected = hot('-a-|', {
        a: ReservationActions.loadReservationSuccess({ reservation: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
