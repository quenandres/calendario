import { CalendarioPage } from './app.po';

describe('calendario App', function() {
  let page: CalendarioPage;

  beforeEach(() => {
    page = new CalendarioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
