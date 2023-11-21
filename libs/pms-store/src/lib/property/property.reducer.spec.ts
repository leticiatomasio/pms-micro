import { Action } from '@ngrx/store';

import * as PropertyActions from './property.actions';
import { PropertyEntity } from './property.models';
import {
  PropertyState,
  initialPropertyState,
  propertyReducer,
} from './property.reducer';

describe('Property Reducer', () => {
  const createPropertyEntity = (id: string, name = ''): PropertyEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Property actions', () => {
    it('loadPropertySuccess should return the list of known Property', () => {
      const property = [
        createPropertyEntity('PRODUCT-AAA'),
        createPropertyEntity('PRODUCT-zzz'),
      ];
      const action = PropertyActions.loadPropertySuccess({ property });

      const result: PropertyState = propertyReducer(
        initialPropertyState,
        action
      );

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = propertyReducer(initialPropertyState, action);

      expect(result).toBe(initialPropertyState);
    });
  });
});
