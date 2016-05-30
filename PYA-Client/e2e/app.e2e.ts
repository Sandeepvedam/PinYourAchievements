import { PYAClientPage } from './app.po';

describe('pya-client App', function() {
  let page: PYAClientPage;

  beforeEach(() => {
    page = new PYAClientPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('pya-client works!');
  });
});
