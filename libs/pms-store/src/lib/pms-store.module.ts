import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromApp from './app/app.reducer';
import { AppEffects } from './app/app.effects';
import { AppFacade } from './app/app.facade';
import * as fromUser from './user/user.reducer';
import { UserEffects } from './user/user.effects';
import { UserFacade } from './user/user.facade';
import * as fromProperty from './property/property.reducer';
import { PropertyEffects } from './property/property.effects';
import { PropertyFacade } from './property/property.facade';

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
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument(),
    StoreModule.forFeature(fromApp.APP_FEATURE_KEY, fromApp.appReducer),
    StoreModule.forFeature(fromUser.USER_FEATURE_KEY, fromUser.userReducer),
    EffectsModule.forFeature([UserEffects]),
    StoreModule.forFeature(
      fromProperty.PROPERTY_FEATURE_KEY,
      fromProperty.propertyReducer
    ),
    EffectsModule.forFeature([PropertyEffects]),
  ],
  providers: [AppFacade, UserFacade, PropertyFacade],
})
export class PmsStoreModule {}
