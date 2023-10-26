import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { readFirst } from '@nrwl/angular/testing';

import * as ReservationActions from './reservation.actions';
import { ReservationEffects } from './reservation.effects';
import { ReservationFacade } from './reservation.facade';
import { ReservationEntity } from './reservation.models';
import {
  RESERVATION_FEATURE_KEY,
  ReservationState,
  initialReservationState,
  reservationReducer,
} from './reservation.reducer';
import * as ReservationSelectors from './reservation.selectors';

interface TestSchema {
  reservation: ReservationState;
}

describe('ReservationFacade', () => {
  let facade: ReservationFacade;
  let store: Store<TestSchema>;
  const createReservationEntity = (
    id: string,
    name = ''
  ): ReservationEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(RESERVATION_FEATURE_KEY, reservationReducer),
          EffectsModule.forFeature([ReservationEffects]),
        ],
        providers: [ReservationFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(ReservationFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allReservation$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allReservation$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadReservationSuccess` to manually update list
     */
    it('allReservation$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allReservation$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        ReservationActions.loadReservationSuccess({
          reservation: [
            createReservationEntity('AAA'),
            createReservationEntity('BBB'),
          ],
        })
      );

      list = await readFirst(facade.allReservation$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
