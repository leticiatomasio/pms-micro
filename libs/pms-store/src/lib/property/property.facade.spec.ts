import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { readFirst } from '@nrwl/angular/testing';

import * as PropertyActions from './property.actions';
import { PropertyEffects } from './property.effects';
import { PropertyFacade } from './property.facade';
import { PropertyEntity } from './property.models';
import {
  PROPERTY_FEATURE_KEY,
  PropertyState,
  initialPropertyState,
  propertyReducer,
} from './property.reducer';
import * as PropertySelectors from './property.selectors';

interface TestSchema {
  property: PropertyState;
}

describe('PropertyFacade', () => {
  let facade: PropertyFacade;
  let store: Store<TestSchema>;
  const createPropertyEntity = (id: string, name = ''): PropertyEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(PROPERTY_FEATURE_KEY, propertyReducer),
          EffectsModule.forFeature([PropertyEffects]),
        ],
        providers: [PropertyFacade],
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
      facade = TestBed.inject(PropertyFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allProperty$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allProperty$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadPropertySuccess` to manually update list
     */
    it('allProperty$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allProperty$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        PropertyActions.loadPropertySuccess({
          property: [createPropertyEntity('AAA'), createPropertyEntity('BBB')],
        })
      );

      list = await readFirst(facade.allProperty$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
