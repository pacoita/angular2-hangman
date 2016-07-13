import {
  describe,
  ddescribe,
  expect,
  iit,
  it
} from '@angular/core/testing';
import {GameLetter} from './game-letter';

describe('GameLetter', () => {
  it('should create an instance', () => {
    expect(new GameLetter('A', false)).toBeTruthy();
  });
});
