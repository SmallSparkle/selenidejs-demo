import 'geckodriver';
import { test, afterAll } from '@jest/globals';
import { browser, perform, have } from 'selenidejs';
import xpathBuilders from '../../../src/helpers/xpath-builders.js';

browser.config.browserName = 'firefox';

test('completes todo', async () => {
  await browser.open('https://todomvc.com/examples/emberjs/');
  await browser.element('//*[@id="new-todo"]').type('a').then(perform.pressEnter);
  await browser.element('//*[@id="new-todo"]').type('b').then(perform.pressEnter);
  await browser.element('//*[@id="new-todo"]').type('c').then(perform.pressEnter);
  await browser.all('//*[@class="todo-list"]/li').should(have.exactTexts('a', 'b', 'c'));

  await browser
    .element('//*[@id="todo-list"]/li[.//text()="b"]//*[' + xpathBuilders.hasCssClass('toggle') + ']')
    .click();

  await browser
    .all('//*[@id="todo-list"]/li[' + xpathBuilders.hasCssClass('completed') + ']')
    .should(have.exactTexts('b'));
  await browser
    .all('//*[@id="todo-list"]/li[not('+ xpathBuilders.hasCssClass('completed')+ ')]')
    .should(have.exactTexts('a', 'c'));
  await browser
    .all('//*[@id="todo-list"]/li')
    .should(have.exactTexts('a', 'b', 'c'));  
});

afterAll(async () => {
  await browser.quit();
});
