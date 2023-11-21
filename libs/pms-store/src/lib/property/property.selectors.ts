import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  PROPERTY_FEATURE_KEY,
  PropertyState,
  propertyAdapter,
} from './property.reducer';

// Lookup the 'Property' feature state managed by NgRx
export const selectPropertyState =
  createFeatureSelector<PropertyState>(PROPERTY_FEATURE_KEY);

const { selectAll, selectEntities } = propertyAdapter.getSelectors();

export const selectPropertyLoaded = createSelector(
  selectPropertyState,
  (state: PropertyState) => state.loaded
);

export const selectPropertyError = createSelector(
  selectPropertyState,
  (state: PropertyState) => state.error
);

export const selectAllProperty = createSelector(
  selectPropertyState,
  (state: PropertyState) => selectAll(state)
);

export const selectPropertyEntities = createSelector(
  selectPropertyState,
  (state: PropertyState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectPropertyState,
  (state: PropertyState) => state.selectedId
);

export const selectEntity = createSelector(
  selectPropertyEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
