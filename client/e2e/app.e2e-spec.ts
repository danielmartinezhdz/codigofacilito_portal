import { AlpuraPage } from './app.po';

describe('alpura App', () => {
  let page: AlpuraPage;

  beforeEach(() => {
    page = new AlpuraPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
