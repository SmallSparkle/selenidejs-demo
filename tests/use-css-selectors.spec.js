import "geckodriver";
import { test, beforeEach, afterAll } from "@jest/globals";
import { browser, perform, by, be, have } from "selenidejs";

beforeEach(async () => {
  browser.config.browserName = "firefox";
  browser.config.windowWidth = "1024";
  browser.config.windowHeight = "768";
});

test("completes todo", async () => {
  await browser.open("https://todomvc.com/examples/emberjs/");

  await browser.element("#new-todo").type("a").then(perform.pressEnter);
  await browser.element("#new-todo").type("b").then(perform.pressEnter);
  await browser.element("#new-todo").type("c").then(perform.pressEnter);

  await browser.all("#todo-list>li").should(have.exactTexts("a", "b", "c"));

  await browser.element("#todo-list>li:nth-child(2) .toggle").click();

  await browser
    .element("#todo-list>li:nth-child(2)")
    .should(have.cssClass("completed"));

  await browser
    .element("#todo-list>li:first-child")
    .should(have.no.cssClass("completed"));

  await browser
    .element("#todo-list>li:last-child")
    .should(have.no.cssClass("completed"));
});

afterAll(async () => {
  await browser.quit();
});
