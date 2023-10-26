import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as ReservationActions from './reservation.actions';
import * as ReservationFeature from './reservation.reducer';

@Injectable()
export class ReservationEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReservationActions.initReservation),
      switchMap(() =>
        of(ReservationActions.loadReservationSuccess({ reservation: [] }))
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(ReservationActions.loadReservationFailure({ error }));
      })
    )
  );
}
