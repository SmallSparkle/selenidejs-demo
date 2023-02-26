import { browser } from 'selenidejs';

const url = 'https://todomvc.com/examples/emberjs/'
const addField = browser.element('//*[@id="new-todo"]');
const todoList = browser.all('//*[@class="todo-list"]/li');

function compliteTodoTasck(tasckName) {
  const selector = '//*[@id="todo-list"]/li[.//text()="'+ tasckName + '"]//*[contains(concat(" ", normalize-space(@class), " "), " toggle ")]';
  
  return browser.element(selector);
};

function listOfComplitedTacks() {
  const selector = '//*[@id="todo-list"]/li[contains(concat(" ", normalize-space(@class), " "), " completed ")]';
  
  return browser.all(selector);
};

function listOfNotComplitedTacks() {
  const selector = '//*[@id="todo-list"]/li[not(contains(concat(" ", normalize-space(@class), " "), " completed "))]';

  return browser.all(selector);
};

export default {
    url,
    addField,
    todoList,
    compliteTodoTasck,
    listOfComplitedTacks,
    listOfNotComplitedTacks
  };
