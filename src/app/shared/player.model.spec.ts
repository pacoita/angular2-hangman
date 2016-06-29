import {
  describe,
  expect,
  it
} from '@angular/core/testing';
import {Player} from './player.model';

describe('Player', () => {
  it('should create an instance', () => {
    expect(new Player()).toBeTruthy();
  });
});
