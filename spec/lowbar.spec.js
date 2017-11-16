var path = require('path');
var expect = require('chai').expect;

var _ = require(path.join(__dirname, '..', './lowbar.js'));

describe('_', function () {
  'use strict';

  it('is an object', function () {
    expect(_).to.be.an('object');
  });
  
  // IDENTITY
  describe('#_.identity', function () {
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

  // FIRST
  describe('#_.first', function () {
    it('is a function', function () {
      expect(_.first).to.be.a('function');
    });
    it('returns the first element of an array or string', function () {
      expect(_.first([5, 4, 3, 2, 1])).to.equal(5);
      expect(_.first('Hello')).to.equal('H');
    });
    it('should return undefined when no argument is passed', function () {
      expect(_.first()).to.be.undefined;
    });
    it('should return undefined for an empty array or string', function () {
      expect(_.first([])).to.be.undefined;
      expect(_.first('')).to.be.undefined;
    });
    it('should not accept an invalid data type', function () {
      expect(_.first(2)).to.be.undefined;
      expect(_.first(2, 1)).to.be.undefined;
      expect(_.first({a:1, b:2, c:3})).to.be.undefined;
      expect(_.first({a:1, b:2, c:3}, 2)).to.be.undefined;
      expect(_.first(true)).to.be.undefined;
      expect(_.first(true, 1)).to.be.undefined;
    });
    it('returns the elements of an array or string (as an array) for the number given as a second argument', function () {
      expect(_.first([5, 4, 3, 2, 1], 2)).to.eql([5, 4]);
      expect(_.first('Hello', 2)).to.eql(['H', 'e']);
    });
  });

  // LAST
  describe('#_.last', function () {
    it('is a function', function () {
      expect(_.last).to.be.a('function');
    });
    it('returns the last element of an array or string', function () {
      expect(_.last([5, 4, 3, 2, 1])).to.equal(1);
      expect(_.last('Goodbye')).to.equal('e');
    });
    it('should return undefined when no argument is passed', function () {
      expect(_.last()).to.be.undefined;
    });
    it('should return undefined for an empty array or string', function () {
      expect(_.last([])).to.be.undefined;
      expect(_.last('')).to.be.undefined;
    });
    it('should not accept an invalid data type', function () {
      expect(_.last(4)).to.be.undefined;
      expect(_.last(4, 1)).to.be.undefined;
      expect(_.last({x:1, y:2, z:3})).to.be.undefined;
      expect(_.last({x:1, y:2, z:3}, 3)).to.be.undefined;
      expect(_.last(false)).to.be.undefined;
      expect(_.last(false), 1).to.be.undefined;
    });
    it('returns the last elements of an array/string (as an array) for number given as second argument', function () {
      expect(_.last([5, 4, 3, 2, 1], 3)).to.eql([3, 2, 1]);
      expect(_.last('Goodbye', 3)).to.eql(['b', 'y', 'e']);
    });
  });

  // INDEX OF
  describe('#_.indexOf', function () {
    it('is a function', function () {
      expect(_.indexOf).to.be.a('function');
    });
    it('returns the index at which value is found in the array/string or -1 if value is not present in array', function () {
      expect(_.indexOf([1, 2, 3], 2)).to.equal(1);
      expect(_.indexOf([1, 2, 3], 4)).to.equal(-1);
      expect(_.indexOf('hello', 'o')).to.equal(4);
      expect(_.indexOf('hello', 'b')).to.equal(-1);
    });
    it('should return -1 when no argument is passed', function () {
      expect(_.indexOf()).to.equal(-1);
      expect(_.indexOf([1,2,3])).to.equal(-1);
    });
    it('should return -1 if given an invalid data type', function () {
      expect(_.indexOf(4280, 4)).to.equal(-1);
      expect(_.indexOf({x:1, y:2, z:3}, 3)).to.equal(-1);
      expect(_.indexOf(true), true).to.equal(-1);
    });
  });

  // FILTER
  describe('#_.filter', function () {
    it('is a function', function () {
      expect(_.filter).to.be.a('function');
    });
    it('takes each value in the list returning only an array of values passing the truth test', function () {
      expect(_.filter([1,2,3,4,5,6], function(num) {
        return num % 2 === 0;
      })).to.eql([2,4,6]);
      expect(_.filter([1,3,5], function(num) {
        return num % 2 === 0;
      })).to.eql([]);
      expect(_.filter({a: 1, b: 2, c: 3, d: 4}, function(num) {
        return num % 2 === 0;
      })).to.eql([2,4]);
      expect(_.filter('1,2,3,4', function(num) {
        return num % 2 === 0;
      })).to.eql(['2','4']);
    });
    it('returns an empty array if no arguments are passed', function () {
      expect(_.filter()).to.eql([]);
    });
    it('returns an empty array if given an invalid data type', function () {
      expect(_.filter(1234, function(num) {
        return num % 2 === 0;
      })).to.eql([]);
      expect(_.filter(true, function(num) {
        return num % 2 === 0;
      })).to.eql([]);
    });
  });

// REJECT
  describe.only('#_.reject', function () {
    it('is a function', function () {
      expect(_.reject).to.be.a('function');
    });
    it('returns the list values that don\'t pass the truth (predicate) test', function () {
      expect(_.reject([1,2,3,4,5,6], function(num) {
        return num % 2 === 0;
      })).to.eql([1,3,5]);
      expect(_.reject([2,4,6], function(num) {
        return num % 2 === 0;
      })).to.eql([]);
      expect(_.reject({a: 1, b: 2, c: 3, d: 4}, function(num) {
        return num % 2 === 0;
      })).to.eql([1,3]);
      expect(_.reject('1234', function(num) {
        return num % 2 === 0;
      })).to.eql(['1','3']);
    });
    it('returns an empty array if no arguments are passed', function () {
      expect(_.reject()).to.eql([]);
    });
    it('returns an empty array if given an invalid data type', function () {
      expect(_.reject(1234, function(num) {
        return num % 2 === 0;
      })).to.eql([]);
      expect(_.reject(true, function(num) {
        return num % 2 === 0;
      })).to.eql([]);
    });
  });

});