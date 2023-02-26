import 'geckodriver';
import { test, afterAll } from '@jest/globals';
import { browser, perform, have } from 'selenidejs';
import todomvc from '../../src/pages/todomvc.js';

browser.config.browserName = 'firefox';

test.skip('completes todo', async () => {
  await browser.open(todomvc.url);
  await todomvc.addField.type('a').then(perform.pressEnter);
  await todomvc.addField.type('b').then(perform.pressEnter);
  await todomvc.addField.type('c').then(perform.pressEnter);
  await todomvc.todoList.should(have.exactTexts('a', 'b', 'c'));

  await todomvc.compliteTodoTasck('b').click();

  await todomvc.listOfComplitedTacks().should(have.exactTexts('b'));
  await todomvc.listOfNotComplitedTacks().should(have.exactTexts('a', 'c'));
  await todomvc.todoList.should(have.exactTexts('a', 'b', 'c'));  
});

afterAll(async () => {
  await browser.quit();
});
