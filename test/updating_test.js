const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe test
describe('Updating records', () => {
  let char;
  beforeEach(done => {
    char = new MarioChar({
      name: 'Mario'
    });
    char.save().then(() => {
      done();
    });
  });

  // Create test
  it('Updates one record from the database', done => {
    MarioChar.findOneAndUpdate(
      { name: 'Mario' },
      { name: 'Luigi' }
    ).then(() => {
      MarioChar.findOne({ _id: char._id }).then(result => {
        assert(result.name.toString() === 'Luigi');
        done();
      });
    });
  });
});
