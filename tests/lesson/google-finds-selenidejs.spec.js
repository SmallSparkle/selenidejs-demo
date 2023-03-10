import 'chromedriver';
import { test, afterAll } from '@jest/globals';
import { browser, by, be, have } from 'selenidejs';

const query = browser.element(by.name('q'));
const results = browser.all('#rso>div');
const firstResultHeader = results.first.element('h3');

test.skip('google finds selenidejs', async () => {
  await browser.open('https://google.com/ncr');
  await query.should(be.blank);

  await query.type('selenidejs');
  await query.pressEnter();
  await results.first.should(have.text('selenidejs'));

  await firstResultHeader.click();
  await browser.should(
    have.titleContaining('GitHub - KnowledgeExpert/selenidejs')
  );
});

afterAll(async () => {
  await browser.quit();
});
