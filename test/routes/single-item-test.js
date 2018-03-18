const {assert} = require('chai');
const request = require('supertest');

const app = require('../../app');

const {parseTextFromHTML, seedItemToDatabase} = require('../test-utils');
const {connectDatabaseAndDropData, diconnectDatabase} = require('../setup-teardown-utils');

describe('Server path: /items/:id', () => {
  beforeEach(connectDatabaseAndDropData);

  afterEach(diconnectDatabase);

  // Write your test blocks below:
  it('create a new item', async () => {
    const newItem = {
      title: 'Title of new item',
      description: 'Description',
      image: 'https://pictures.luxuryretreats.com/113869/tulum_haciendaparaiso_25.jpg',
    }
    const item = await seedItemToDatabase(newItem);
    const response = await request(app)
    .get(`/items/${item._id}`);
    
    assert.include(parseTextFromHTML(response.text, '#item-title'), newItem.title);
    assert.include(parseTextFromHTML(response.text, '#item-description'), newItem.description);
  });
  
});
