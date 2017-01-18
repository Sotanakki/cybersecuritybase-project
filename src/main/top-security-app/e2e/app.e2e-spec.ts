import { TopSecurityAppPage } from './app.po';

describe('top-security-app App', function() {
  let page: TopSecurityAppPage;

  beforeEach(() => {
    page = new TopSecurityAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
