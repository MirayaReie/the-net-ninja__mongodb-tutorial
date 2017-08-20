const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe test
describe('Saving record', () => {
  // Create test
  it('Saves record to the database', done => {
    const char = new MarioChar({
      name: 'Mario'
    });
    char.save().then(() => {
      // save() provided by mongoose, is a promise
      assert(char.isNew === false);
      done();
    });
  });
});
