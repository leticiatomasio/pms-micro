import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as PropertyActions from './property.actions';
import { PropertyEffects } from './property.effects';

describe('PropertyEffects', () => {
  let actions: Observable<Action>;
  let effects: PropertyEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        PropertyEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(PropertyEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: PropertyActions.initProperty() });

      const expected = hot('-a-|', {
        a: PropertyActions.loadPropertySuccess({ property: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
