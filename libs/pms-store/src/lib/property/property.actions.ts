import { createAction, props } from '@ngrx/store';
import { PropertyEntity } from './property.models';

export const initProperty = createAction('[Property Page] Init');

export const loadPropertySuccess = createAction(
  '[Property/API] Load Property Success',
  props<{ property: PropertyEntity[] }>()
);

export const loadPropertyFailure = createAction(
  '[Property/API] Load Property Failure',
  props<{ error: any }>()
);
