const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe tests
describe('Saving record', () => {
  // Create tests
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
