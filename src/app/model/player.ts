export class Player {

  id: number;
  name: string;
  language: string;

  constructor(name: string, lang: string) {
    this.name = name || Player.GetRandomUsername();
    this.language = lang || 'eng';
  }

  private static GetRandomUsername () {
    return `User_${Math.random().toString(36).substring(16)}`;
  }
}


