export class GameLetter {

    name: string;
    chosen: boolean;

    constructor(letterName: string, letterChosen: boolean) {
        this.name = letterName;
        this.chosen = letterChosen;
    }
}
