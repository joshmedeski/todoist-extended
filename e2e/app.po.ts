import { browser, by, element } from 'protractor';

export class TodoistExtendedPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('te-root h1')).getText();
  }
}
