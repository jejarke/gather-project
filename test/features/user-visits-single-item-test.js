const {assert} = require('chai');
const {buildItemObject} = require('../test-utils');

describe('User visits the create page', () => {
    describe('create a new item', () => {
      it('and is rendered', () => {
        const {title, description, imageUrl} = buildItemObject();
        browser.url('/items/create');
        browser.setValue('#title-input', title);
        browser.setValue('#description-input', description);
        browser.setValue('#imageUrl-input', imageUrl);
        browser.click('#submit-button');

        /**
         * After submit the form redirect to the first path 
         * to check if item has been created
         */
        browser.click('.item-card a');
        assert.include(browser.getText('body'), description);
      });
    });
});

