'use strict';

export class Player {

  id: number;
  name: string;
  highScore: number;
  language: string;

  constructor(name, score, lang) {
    this.name = name || Player.GetRandomUsername();
    this.highScore = score || 0;
    this.language = lang || 'eng';
  }

  private static GetRandomUsername () {
    return `User_${Math.random().toString(36).substring(16)}`;
  }
}


