var path = require('path');
var expect = require('chai').expect;

var _ = require(path.join(__dirname, '..', './lowbar.js'));

describe('_', function () {
  'use strict';

  it('is an object', function () {
    expect(_).to.be.an('object');
  });
  
  // IDENTITY
  describe.only('#_.identity', function () {
    it('is a function', function () {
      expect(_.identity).to.be.a('function');
    });
    it('returns the value of what was passed into it as an argument', function () {
      expect(_.identity([1,2])).to.eql([1,2]);
    });
    it('returns an array when passed an array as an argument', function () {
      expect(_.identity([1,2,3,4,5])).to.eql([1,2,3,4,5]);
    });
    it('returns an object when passed an object as an argument', function () {
      expect(_.identity({name: 'Northcoders'})).to.eql({name: 'Northcoders'});
    });
    it('returns a number when passed a number as an argument', function () {
      expect(_.identity(4)).to.equal(4);
    });
    it('returns a string when passed a string as an argument', function () {
      expect(_.identity('Hello world')).to.equal('Hello world');
    });
    it('returns a boolean value when passed a boolean as an argument', function () {
      var val = true;
      expect(_.identity(val)).to.equal(true);
    });
    it('returns undefined when passed no arguments', function () {
      expect(_.identity()).to.be.undefined;
    });
  });

});