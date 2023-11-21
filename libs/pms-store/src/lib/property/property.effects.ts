import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as PropertyActions from './property.actions';
import * as PropertyFeature from './property.reducer';

@Injectable()
export class PropertyEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PropertyActions.initProperty),
      switchMap(() =>
        of(PropertyActions.loadPropertySuccess({ property: [] }))
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(PropertyActions.loadPropertyFailure({ error }));
      })
    )
  );
}
