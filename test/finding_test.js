const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe tests
describe('Finding records', () => {
  beforeEach(done => {
    const char = new MarioChar({
      name: 'Mario'
    });
    char.save().then(() => {
      done();
    });
  });

  // Create tests
  it('Finds one record from the database', done => {
    MarioChar.findOne({ name: 'Mario' }).then(result => {
      assert(result.name === 'Mario');
      done();
    });
  });
  it('Does not find not existent record from the database', done => {
    MarioChar.findOne({ name: 'Yoshi' }).then(result => {
      assert(result === null && typeof result === 'object'); // test on null
      done();
    });
  });
});
