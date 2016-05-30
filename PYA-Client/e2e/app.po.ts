export class PYAClientPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pya-client-app h1')).getText();
  }
}
