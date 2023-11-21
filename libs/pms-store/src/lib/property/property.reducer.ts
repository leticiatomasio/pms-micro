import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as PropertyActions from './property.actions';
import { PropertyEntity } from './property.models';

export const PROPERTY_FEATURE_KEY = 'property';

export interface PropertyState extends EntityState<PropertyEntity> {
  selectedId?: string | number; // which Property record has been selected
  loaded: boolean; // has the Property list been loaded
  error?: string | null; // last known error (if any)
}

export interface PropertyPartialState {
  readonly [PROPERTY_FEATURE_KEY]: PropertyState;
}

export const propertyAdapter: EntityAdapter<PropertyEntity> =
  createEntityAdapter<PropertyEntity>();

export const initialPropertyState: PropertyState =
  propertyAdapter.getInitialState({
    // set initial required properties
    loaded: false,
  });

const reducer = createReducer(
  initialPropertyState,
  on(PropertyActions.initProperty, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(PropertyActions.loadPropertySuccess, (state, { property }) =>
    propertyAdapter.setAll(property, { ...state, loaded: true })
  ),
  on(PropertyActions.loadPropertyFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function propertyReducer(
  state: PropertyState | undefined,
  action: Action
) {
  return reducer(state, action);
}
