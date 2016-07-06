import {
  describe,
  expect,
  it
} from '@angular/core/testing';
import {Player} from './player';

describe('Player', () => {
  it('should create an instance', () => {
    expect(new Player("test", "eng")).toBeTruthy();
  });
});
