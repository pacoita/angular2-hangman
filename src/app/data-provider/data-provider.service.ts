import { Injectable } from '@angular/core';

@Injectable()
export class DataProviderService {

   words: string[] = [
  'rails', 'angularJS', 'bootstrap', 'ruby', 'javaScript',
  'authentication', 'function', 'array', 'object', 'sublime',
  'github', 'agile', 'route', 'database', 'model', 'view',
  'controller', 'terminal', 'array', 'data', 'inheritance',
  'heroku', 'scope',  'closure'
];

  constructor() {}

  getGameWord() {
    let index = this.pickRandomWord(this.words.length);
    return this.words[index];
  }

  private pickRandomWord(maxValue: number) {
    return Math.floor(Math.random() * maxValue);
  }


}
