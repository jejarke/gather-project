const {assert} = require('chai');
const {buildItemObject} = require('../test-utils');

describe('User visits the create page', () => {
    describe('posts a new item', () => {
      it('and is rendered', () => {
        const itemToCreate = buildItemObject();
        browser.url('/items/create');
        browser.setValue('#title-input', itemToCreate.title);
        browser.setValue('#description-input', itemToCreate.description);
        browser.setValue('#imageUrl-input', itemToCreate.imageUrl);
        browser.click('#submit-button');

        /**
         * After submit the form redirect to the first path 
         * to check if item has been created
         */
        browser.url('/');
        browser.click('.item-card a[href=""]');
        assert.include(browser.getText('body'), itemToCreate.title);
      });
    });
});

