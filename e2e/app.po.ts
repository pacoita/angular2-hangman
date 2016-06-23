export class Angular2HangmanPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-hangman-app h1')).getText();
  }
}
