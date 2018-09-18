var path = require('path');
var expect = require('chai').expect;

var fizzbuzz = require(path.join(__dirname, '..', './fizzbuzz.js'));

describe('fizzbuzz()', function () {
  'use strict';

  it('exists', function () {
    expect(fizzbuzz).to.be.a('function');

  });

  it('gives 3 when number can be divided by 3', function () {
    expect(fizzbuzz(6)).to.equal(3);
  });

  it('gives 5 when number can be divided by 5', function () {
    expect(fizzbuzz(10)).to.equal(5);
  });

  it('gives 0 when number can be divided by 3 AND 5', function () {
     expect(fizzbuzz(15)).to.equal(0);
  });

  it('gives the passed num when number cant be divided by both 3 or 5', function () {
      expect(fizzbuzz(-10)).to.equal(-10);
  });

  // Add more assertions here
});
