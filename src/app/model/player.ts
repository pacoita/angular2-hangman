'use strict';

export class Player {

  id: number;
  name: string;
  highScore: number;
  language: string;

  constructor(name, score, lang) {
    this.name = name;
    this.highScore = score;
    this.language = lang;
  }
}
