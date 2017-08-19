const mongoose = require('mongoose');

// Make mongoose use ES6 promises, instead those outta the box
mongoose.Promise = global.Promise;

// Connect to the db before tests run
before(done => {
  // Connect to mongodb
  mongoose.connect('mongodb://localhost/testaroo', { useMongoClient: true });

  mongoose.connection
    .once('open', () => {
      console.log('Connection has been made.');
      done();
    })
    .on('error', error => {
      console.log('Connection error', error);
    });
});
