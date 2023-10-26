import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromReservation from './reservation/reservation.reducer';
import { ReservationEffects } from './reservation/reservation.effects';
import { ReservationFacade } from './reservation/reservation.facade';
import * as fromApp from './app/app.reducer';
import { AppEffects } from './app/app.effects';
import { AppFacade } from './app/app.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([AppEffects]),
    StoreModule.forFeature(fromApp.APP_FEATURE_KEY, fromApp.appReducer),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument(),
    StoreModule.forFeature(
      fromReservation.RESERVATION_FEATURE_KEY,
      fromReservation.reservationReducer
    ),
    EffectsModule.forFeature([ReservationEffects]),
  ],
  providers: [ReservationFacade, AppFacade],
})
export class PmsStoreModule {}
