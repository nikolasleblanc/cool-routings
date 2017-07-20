import { CoolRoutingsPage } from './app.po';

describe('cool-routings App', () => {
  let page: CoolRoutingsPage;

  beforeEach(() => {
    page = new CoolRoutingsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
