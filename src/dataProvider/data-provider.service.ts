import { Injectable } from '@angular/core';

@Injectable()
export class DataProviderService {

   words: string[] = [
  'Rails', 'AngularJS', 'Bootstrap', 'Ruby', 'JavaScript',
  'authentication', 'function', 'array', 'object', 'sublime',
  'github', 'agile', 'route', 'database', 'model', 'view',
  'controller', 'terminal', 'array', 'data', 'inheritance',
  'Heroku', 'scope',  'closure'
];

  constructor() {}

  //TODO: move fallback word resource to proper location & fetch them from DB



}
