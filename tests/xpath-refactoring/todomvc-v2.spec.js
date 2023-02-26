import 'geckodriver';
import { test, afterAll } from '@jest/globals';
import { browser, perform, have } from 'selenidejs';

browser.config.browserName = 'firefox';

test('completes todo', async () => {
  await browser.open('https://todomvc.com/examples/emberjs/');
  await browser.element('//*[@id="new-todo"]').type('a').then(perform.pressEnter);
  await browser.element('//*[@id="new-todo"]').type('b').then(perform.pressEnter);
  await browser.element('//*[@id="new-todo"]').type('c').then(perform.pressEnter);
  await browser.all('//*[@class="todo-list"]/li').should(have.exactTexts('a', 'b', 'c'));

  await browser.element(todoTasck('b')).click();

  await browser.all(listOfComplitedTacks()).should(have.exactTexts('b'));
  await browser.all(listOfNotComplitedTacks()).should(have.exactTexts('a', 'c'));
  await browser.all('//*[@id="todo-list"]/li').should(have.exactTexts('a', 'b', 'c'));  
});

afterAll(async () => {
  await browser.quit();
});

function todoTasck(tasckName) {
    return'//*[@id="todo-list"]/li[.//text()="'+ tasckName + '"]//*[contains(concat(" ", normalize-space(@class), " "), " toggle ")]';
};
function listOfComplitedTacks() {
   return '//*[@id="todo-list"]/li[contains(concat(" ", normalize-space(@class), " "), " completed ")]';
};

function listOfNotComplitedTacks() {
   return '//*[@id="todo-list"]/li[not(contains(concat(" ", normalize-space(@class), " "), " completed "))]';
};
