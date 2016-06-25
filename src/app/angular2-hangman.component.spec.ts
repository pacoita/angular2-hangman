import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';

import { Angular2HangmanAppComponent } from '../app/angular2-hangman.component';

beforeEachProviders(() => [Angular2HangmanAppComponent]);

describe('App: Angular2Hangman', () => {
  it('should create the app',
      inject([Angular2HangmanAppComponent], (app: Angular2HangmanAppComponent) => {
    expect(app).toBeTruthy();
  }));


 /*
  it('should have as title \'angular2-hangman works!\'',
      inject([Angular2HangmanAppComponent], (app: Angular2HangmanAppComponent) => {
    expect(app.title).toEqual('angular2-hangman works!');
  }));
  */
});
