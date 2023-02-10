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

  await browser.element('(//*[@class="todo-list"]/li//input[@class="toggle"])[2]').click();
  
  //THEN
//first solution
  await browser
    .element('//*[@class="todo-list"]//label[text()="b"]/ancestor::li')
    .should(have.cssClass('completed'));  
// second solution
    // .all('//*[@class="todo-list"]//li[contains(@class, "completed")]') 
    // .should(have.exactTexts('b'));

  await browser
    .all('//*[@class="todo-list"]/li[not(contains(@class,"completed"))]')
    .should(have.exactTexts('a', 'c'));
  await browser
    .all('//*[@class="todo-list"]/li')
    .should(have.exactTexts('a', 'b', 'c'));  
});

afterAll(async () => {
  await browser.quit();
});
