import { PropertyEntity } from './property.models';
import {
  propertyAdapter,
  PropertyPartialState,
  initialPropertyState,
} from './property.reducer';
import * as PropertySelectors from './property.selectors';

describe('Property Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getPropertyId = (it: PropertyEntity) => it.id;
  const createPropertyEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as PropertyEntity);

  let state: PropertyPartialState;

  beforeEach(() => {
    state = {
      property: propertyAdapter.setAll(
        [
          createPropertyEntity('PRODUCT-AAA'),
          createPropertyEntity('PRODUCT-BBB'),
          createPropertyEntity('PRODUCT-CCC'),
        ],
        {
          ...initialPropertyState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Property Selectors', () => {
    it('selectAllProperty() should return the list of Property', () => {
      const results = PropertySelectors.selectAllProperty(state);
      const selId = getPropertyId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = PropertySelectors.selectEntity(state) as PropertyEntity;
      const selId = getPropertyId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectPropertyLoaded() should return the current "loaded" status', () => {
      const result = PropertySelectors.selectPropertyLoaded(state);

      expect(result).toBe(true);
    });

    it('selectPropertyError() should return the current "error" state', () => {
      const result = PropertySelectors.selectPropertyError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
