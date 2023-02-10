import 'geckodriver';
import { test, beforeEach, afterAll } from '@jest/globals';
import { browser, perform, have } from 'selenidejs';

beforeEach(async () => {
  browser.config.browserName = 'firefox';
  browser.config.windowWidth = '1024';
  browser.config.windowHeight = '768';
});

test.skip('completes todo', async () => {
  await browser.open('https://todomvc.com/examples/emberjs/');
  await browser.element('#new-todo').type('a').then(perform.pressEnter);
  await browser.element('#new-todo').type('b').then(perform.pressEnter);
  await browser.element('#new-todo').type('c').then(perform.pressEnter);
  await browser.all('#todo-list>li').should(have.exactTexts('a', 'b', 'c'));

  await browser
    .all('#todo-list>li')
    .elementBy(have.exactText('b'))
    .element('.toggle')
    .click();

  //THEN
  await browser
    .all('#todo-list>li')
    .by(have.cssClass('completed'))
    .should(have.exactTexts('b'));

  await browser
    .all('#todo-list>li')
    .by(have.no.cssClass('completed'))
    .should(have.exactTexts('a', 'c'));
});

afterAll(async () => {
  await browser.quit();
});
