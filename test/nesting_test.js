const assert = require('assert');
const mongoose = require('mongoose');

const Author = require('../models/author');

describe('Nesting records', () => {
  beforeEach(done => {
    mongoose.connection.collections.authors.drop(() => {
      done();
    });
  });

  it('Creates an author with sub-documents', done => {
    const pat = new Author({
      name: 'Patrick Rothfus',
      books: [{ title: 'Name of the Wind', pages: 42 }]
    });

    pat.save().then(() => {
      Author.findOne({ name: 'Patrick Rothfus' }).then(record => {
        assert(record.books.length === 1);
        done();
      });
    });
  });

  it('Adds a book to an author', done => {
    const pat = new Author({
      name: 'Patrick Rothfus',
      books: [{ title: 'Name of the Wind', pages: 42 }]
    });

    pat.save().then(() => {
      Author.findOne({ name: 'Patrick Rothfus' }).then(record => {
        record.books.push({ title: "Wise Man's Fear", pages: 73 });
        record.save().then(() => {
          Author.findOne({ name: 'Patrick Rothfus' }).then(record => {
            assert(record.books.length === 2);
            done();
          });
        });
      });
    });
  });
});
