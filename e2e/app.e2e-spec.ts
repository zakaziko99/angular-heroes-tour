import { AngularHeroesTourPage } from './app.po';

describe('angular-heroes-tour App', () => {
  let page: AngularHeroesTourPage;

  beforeEach(() => {
    page = new AngularHeroesTourPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
