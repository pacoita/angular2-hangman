import { Angular2HangmanPage } from './app.po';

describe('angular2-hangman App', function() {
  let page: Angular2HangmanPage;

  beforeEach(() => {
    page = new Angular2HangmanPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2-hangman works!');
  });
});
