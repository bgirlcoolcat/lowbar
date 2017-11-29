var path = require('path');
var expect = require('chai').expect;
var sinon = require('sinon');

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
  describe('#_.reject', function () {
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

  // EACH
  describe('#_.each', function () {
    it('is a function', function () {
      expect(_.each).to.be.a('function');
    });
    it('calls the iteratee the correct number of times when passed an array', function () {
      let callCount = 0;
      _.each([1, 2, 3], function() {
        callCount++;
      });
      expect(callCount).to.equal(3);
    });
    it('calls the iteratee with its arguments (element, index, list) for an array', function () {
      var elements = [];
      var indexes = [];
      var lists = [];
      _.each([1, 2, 3], function(elem, i, list) {
        elements.push(elem);
        indexes.push(i);
        lists.push(list);
      });
      expect(elements).to.eql([1, 2, 3]);
      expect(indexes).to.eql([0, 1, 2]);
      expect(lists).to.eql([[1, 2, 3], [1, 2, 3], [1, 2, 3]]);
    });
    it('calls the iteratee the correct number of times when passed an object', function () {
      let callObjCount = 0;
      _.each({a: 1, b: 2, c: 3}, function() {
        callObjCount++;
      });
      expect(callObjCount).to.equal(3);
    });
    it('calls the iteratee with its arguments (value, key, list) for an object', function () {
      var values = [];
      var keys = [];
      var lists = [];
      _.each({a: 1, b: 2, c: 3}, function(val, key, list) {
        values.push(val);
        keys.push(key);
        lists.push(list);
      });
      expect(values).to.eql([1, 2, 3]);
      expect(keys).to.eql(['a', 'b', 'c']);
      expect(lists).to.eql([{a: 1, b: 2, c: 3}, {a: 1, b: 2, c: 3}, {a: 1, b: 2, c: 3}]);
    });
    it('should return the list if it is given an invalid data type', function () {
      let count = 0;
      expect(_.each(1234, function () { return count += 1; })).to.equal(1234);
      expect(_.each(true, function () { return count += 1; })).to.equal(true);
      // expect(_.each(null, function () { return count += 1; })).to.equal(null);
    });
    it('should return the list if an iteratee argument is not passed', function () {
      expect(_.each([1, 2, 3])).to.eql([1, 2, 3]);
      expect(_.each({a: 1, b: 2, c: 3})).to.eql({a: 1, b: 2, c: 3});
      expect(_.each('hello')).to.eql('hello');
    });

    // using spies
    it('calls the iteratee the correct number of times when passed an array (checked with a spy)', function () {
      var spy = sinon.spy();
      _.each([1, 2, 3], spy);
      expect(spy.callCount).to.equal(3);
    });
    it('calls the iteratee the correct number of times when passed a string (checked with a spy)', function () {
      var spy = sinon.spy();
      _.each('boo', spy);
      expect(spy.callCount).to.equal(3);
    });
    it('calls the iteratee with its arguments (element, index, list) for an array (checked with a spy)', function () {
      var spy = sinon.spy();
      _.each([1, 2, 3], spy);
      var firstCall = spy.getCall(0);
      var secondCall = spy.getCall(1);
      var thirdCall = spy.getCall(2);
      expect(firstCall.args).to.eql([1, 0, [1, 2, 3]]);
      expect(secondCall.args).to.eql([2, 1, [1, 2, 3]]);
      expect(thirdCall.args).eql([3, 2, [1, 2, 3]]);
    });
    it('calls the iteratee the correct number of times when passed an object (checked with a spy)', function () {
      var spy = sinon.spy();
      _.each({a: 1, b: 2, c: 3}, spy);
      expect(spy.callCount).to.equal(3);
    });
    it('calls the iteratee with its arguments (value, key, list) for an object (checked with a spy)', function () {
      var spy = sinon.spy();
      _.each({a: 1, b: 2, c: 3}, spy);
      var firstCall = spy.getCall(0);
      var secondCall = spy.getCall(1);
      var thirdCall = spy.getCall(2);
      expect(firstCall.args).to.eql([1, 'a', {a: 1, b: 2, c: 3}]);
      expect(secondCall.args).to.eql([2, 'b', {a: 1, b: 2, c: 3}]);
      expect(thirdCall.args).eql([3, 'c', {a: 1, b: 2, c: 3}]);
    });
    it('should return the list if it is given as an invalid data type (checked with a spy)', function () {
      var spy = sinon.spy();
      _.each(1234, spy);
      expect(spy.callCount).to.equal(0);
    });
    it('should not call the iteratee if given an invalid data type (checked with a spy)', function () {
      var spy = sinon.spy();
      _.each(1234, spy);
      expect(spy.notCalled).to.equal(true);
    });
  });

  // UNIQ
  describe('#_.uniq', function () {
    it('is a function', function () {
      expect(_.uniq).to.be.a('function');
    });
    it('returns a duplicate-free version of the array', function () {
      expect(_.uniq([1, 2, 1, 4, 1, 3])).to.eql([1, 2, 4, 3]);
      expect(_.uniq([1, 1, 1, 1])).to.eql([1]);
    });
    it('returns a duplicate-free version of the string', function () {
      expect(_.uniq('1263643')).to.eql(['1', '2', '6', '3', '4']);
    });
    it('should return an empty array when passed an empty array or string as an argument', function () {
      expect(_.uniq([])).to.eql([]);
      expect(_.uniq('')).to.eql([]);
    });
    it('should return an empty array when passed no argument', function () {
      expect(_.uniq()).to.eql([]);
    });
    it('should return an empty array when passed an invalid data type', function () {
      expect(_.uniq({a:1, b:3, c:6, d:6, e:3, f:2})).to.eql([]);
      expect(_.uniq(1263643)).to.eql([]);
      expect(_.uniq(true, false, true)).to.eql([]);
    });
  });

  // MAP
  describe('#_.map', function () {
    it('is a function', function () {
      expect(_.map).to.be.a('function');
    });
    it('produces a new array of values by mapping each value in list through a transformation function (iteratee)', function () {
      expect(_.map([1, 2, 3], function (num) { 
        return num * 3; 
      })).to.eql([3, 6, 9]);
      expect(_.map('12345', function (num) { 
        return num * 3; 
      })).to.eql([3, 6, 9, 12, 15]);
      expect(_.map({a: 1, b: 2, c: 3}, function (num) { 
        return num * 3; 
      })).to.eql([3, 6, 9]);
    });
    it('maps each value in array through a transformation function (using _.first as the iteratee)', function () {
      expect(_.map([[1, 2, 3, 4]], _.first)).to.eql([1]);
      expect(_.map([[1, 2], [3, 4]], _.first)).to.eql([1, 3]);
    });
    it('returns an empty array when passed an empty list as an argument', function () {
      expect(_.map([], function (num) { 
        return num + 1; 
      })).to.eql([]);
      expect(_.map({}, function (num) { 
        return num + 1; 
      })).to.eql([]);
      expect(_.map('', function (num) { 
        return num + 1; 
      })).to.eql([]);
    });
    it('returns an empty array when passed an invalid data type', function () {
      expect(_.map(2468, function (num) { 
        return num + 1; 
      })).to.eql([]);
      expect(_.map(false, function (boolean) { 
        return false === boolean; 
      })).to.eql([]);
    });
  });

  // CONTAINS
  describe('#_.contains', function () {
    it('is a function', function () {
      expect(_.contains).to.be.a('function');
    });
    it('returns true if the value is present in the list; false if not', function () {
      expect(_.contains([1, 2, 3], 3)).to.equal(true);
      expect(_.contains([1, 2, 3], 4)).to.equal(false);
      expect(_.contains({a:1, b:2, c:3}, 3)).to.equal(true);
      expect(_.contains({a:1, b:2, c:3}, 4)).to.equal(false);
      expect(_.contains('javascript', 't')).to.equal(true);
      expect(_.contains('javascript', 'z')).to.equal(false);
    });
    it('returns false when given an invalid data type', function () {
      expect(_.contains(12345, 3)).to.equal(false);
      expect(_.contains(true, true)).to.equal(false);
    });
    it('returns false when passed no arguments', function () {
      expect(_.contains()).to.equal(false);
    });
    it('uses fromIndex to start a search at a given index', function () {
      expect(_.contains([1, 2, 3], 3, 1)).to.equal(true);
      expect(_.contains([1, 2, 3], 1, 1)).to.equal(false);
    });
  });

  // PLUCK
  describe('#_.pluck', function () {
    it('is a function', function () {
      expect(_.pluck).to.be.a('function');
    });
    it('returns an extracted list of property values', function () {
      let animals = [{name: 'cat', type: 'feline'}, {name: 'dog', type: 'canine'}, {name: 'bear', type: 'ursine'}];
      expect(_.pluck(animals, 'name')).to.eql(['cat', 'dog', 'bear']);
      expect(_.pluck(animals, 'type')).to.eql(['feline', 'canine', 'ursine']);
    });
    it('returns an extracted list of property values for an object where every value is an object itself', function () {
      var group =  { 'john' : {family: 45, rest: 60 }, 'max' : {family: 3, rest: 60} };
      _.pluck(group, 'family');
    });
    it('returns undefined if list does not contain property name', function () {
      let animals = [{name: 'cat', type: 'feline'}, {name: 'dog', type: 'canine'}, {name: 'bear', type: 'ursine'}];
      expect(_.pluck(animals, 'noise')).to.eql([undefined, undefined, undefined]);
    });
    it('returns undefined if list is not an array of objects', function () {
      let names = ['cat', 'dog', 'bear'];
      expect(_.pluck(names, 'cat')).to.eql([undefined, undefined, undefined]);
      let details = ['name', 'age', {name: 'Bev'}];
      expect(_.pluck(details, 'name')).to.eql([undefined, undefined, 'Bev']);
      expect(_.pluck('cat', 'a')).to.eql([undefined, undefined, undefined]);
    });
    it('returns an empty array if no arguments are passed', function () {
      expect(_.pluck()).to.eql([]);
    });
    it('returns an empty array for invalid data types', function () {
      expect(_.pluck(123456, 1)).to.eql([]);
      expect(_.pluck(true, true)).to.eql([]);
    });
  });

  // EVERY
  describe('#_.every', function () {
    it('is a function', function () {
      expect(_.every).to.be.a('function');
    });
    it('returns true if all of the values in the list pass the predicate truth test', function () {
      expect(_.every([2, 4, 6], function (num) { 
        return num % 2 === 0; 
      })).to.equal(true);
      expect(_.every(['bev', 'kate', 'lisa'], function (name) { 
        return name.length > 2; 
      })).to.equal(true);
      expect(_.every('hhhhhh', function (char) { 
        return char === 'h';
      })).to.equal(true);
      expect(_.every([true, true, true], function (value) { 
        return (value === true);
      })).to.equal(true);
    });
    it('returns false if one or more values in the list is false', function () {
      expect(_.every([2, 4, 5], function (num) { 
        return num % 2 === 0; 
      })).to.equal(false);
      expect(_.every(['bev', 'kate', 'lisa'], function (name) { 
        return name.length > 3; 
      })).to.equal(false);
      expect(_.every({a:2, b:4, c:7}, function (num) { 
        return num % 2 === 0;
      })).to.equal(false);
      expect(_.every({a: 'a', b: 'b', c: 1, d: 'd'}, function (char) { 
        return typeof char === 'string';
      })).to.be.false;
    });
    it('returns true if no arguments are passed', function () {
      expect(_.every()).to.equal(true);
    });
    it('returns true if given an invalid data type (number or boolean)', function () {
      expect(_.every(1579, function (num) {
        return num % 2 === 0;
      })).to.equal(true);
      expect(_.every(false, function (value) {
        return value === false;
      })).to.equal(true);
    });
    it('stops traversing the list if a false element is found (array)', function () {
      let count = 0;
      _.every([1,2,3,4], function (number) {
        count++;
        return typeof number === 'number';
      });
      expect(count).to.equal(4);

      count = 0;
      _.every([1,2,'foo',4], function (number) {
        count++;
        return typeof number === 'number';
      });
      expect(count).to.equal(3);
    });
    it('stops traversing the list if a false element is found (object)', function () {
      let count = 0;
      _.every({a: 'a', b: 'b', c: 'c', d: 'd'}, function (chars) {
        count++;
        return typeof chars === 'string';
      });
      expect(count).to.equal(4);

      count = 0;
      _.every({a: 'a', b: 1, c: 2, d: 'd'}, function (chars) {
        count++;
        return typeof chars === 'string';
      });
      expect(count).to.equal(2);
    });
  });

  // SOME
  describe('#_.some', function () {
    it('is a function', function () {
      expect(_.some).to.be.a('function');
    });
    it('returns true if any of the values in the list pass the predicate truth test', function () {
      expect(_.some([2, 4, 5], function (num) { 
        return num % 2 === 0; 
      })).to.equal(true);
      expect(_.some([null, 0, 'yes', false], function (truthy) { 
        return truthy; 
      })).to.be.true;
      expect(_.some({a: 'a', b: 'b', c: 1, d: 'd'}, function (char) { 
        return typeof char === 'string';
      })).to.be.true;
    });
    it('returns false if none of the values in the list pass the predicate truth test', function () {
      expect(_.some([3, 5, 7], function (num) { 
        return num % 2 == 0; 
      })).to.equal(false);
      expect(_.some(['Sandra', 'Alison', 'Kate', 'Paul'], function (name) { 
        return name.includes('z'); 
      })).to.be.false;
      expect(_.some('hhhhhh', function (char) { 
        return char === 'g';
      })).to.be.false;
      });
      it('returns false if no arguments are passed', function () {
        expect(_.some()).to.be.false;
      });
      it('returns false if given an invalid data type (number or boolean)', function () {
        expect(_.some(2879, function (num) { 
          return typeof num === 'number'; 
        })).to.be.false;
        expect(_.some(true, function (value) { 
          return value === true; 
        })).to.be.false;
      });
      it('stops traversing the list if a true element is found (array)', function () {
        let count = 0;
        _.some(['foo', 2, 'boo', 4], function (values) {
          count++;
          return typeof values === 'number';
        });
        expect(count).to.equal(2);
      });
      it('stops traversing the list if a true element is found (object)', function () {
        let count = 0;
        _.some({a: 1, b: 2, c: 'a', d: 4}, function (chars) {
          count++;
          return typeof chars === 'string';
        });
        expect(count).to.equal(3);
      });
  });

  // EXTEND
  describe('#_.extend', function () {
    it('is a function', function () {
      expect(_.extend).to.be.a('function');
    });
    it('shallowly copies all properties in source object to destination object, and returns the destination object', function () {
      expect(_.extend({name: 'moe'}, {age: 50})).to.eql({name: 'moe', age: 50});
      expect(_.extend({name: 'moe'}, {age: 50, hairColour: 'brown', gender: 'male'})).to.eql({name: 'moe', age: 50, hairColour: 'brown', gender: 'male'});
    });
    it('shallowly copies all properties in source objects to destination object, and returns the destination object', function () {
      expect(_.extend({name: 'moe'}, {age: 50}, {hairColour: 'brown'}, {gender: 'male'})).to.eql({name: 'moe', age: 50, hairColour: 'brown', gender: 'male'});

      let o1 = { age: 50 };
      let o2 = { hairColour: 'brown' };
      let o3 = { gender: 'male' };
      expect(_.extend({name: 'moe'}, o1,o2,o3)).to.eql({name: 'moe', age: 50, hairColour: 'brown', gender: 'male'});
    });
    it('handles nested objects copied by reference, not duplicated', function () {
      let obj1 = {d: 'D', e: 'E'};
      let obj2 = {a: 'A', b: 'B'};
      let obj3 = {c: obj1};
      let result = _.extend({}, obj2, obj3);
      expect(_.extend(result)).to.eql( {a: 'A', b: 'B', c: {d: 'D', e: 'E'}});

      obj1.f = 'F';
      expect(result).to.eql( {a: 'A', b: 'B', c: {d: 'D', e: 'E', f: 'F'}});
    });
    it('handles nested arrays copied by reference, not duplicated', function () {
      let arr1 = ['x', 'y'];
      let obj2 = {a: 1, b: 2};
      let obj3 = {c: arr1};
      let result = _.extend(obj2, obj3);
      expect(result).to.eql( {a: 1, b: 2, c: ['x', 'y']});

      arr1.push('z');
      expect(result).to.eql( {a: 1, b: 2, c: ['x', 'y', 'z']});
    });
    it('is in order, so the last source will override properties of the same name in previous arguments', function () {
      let o1 = { a: 1, b: 1, c: 1 };
      let o2 = { b: 2, c: 2 };
      let o3 = { c: 3 };
      expect(_.extend({}, o1, o2, o3)).to.eql({a: 1, b: 2, c: 3});

      let a1 = [1, 1, 1, 1, 1];
      let a2 = [2, 2, 2];
      let a3 = [3];
      expect(_.extend(a1, a2, a3)).to.eql([3, 2, 2, 1, 1]);
    });
    it('returns undefined if no arguments are passed', function () {
      expect(_.extend()).to.equal(undefined);
    });
    it('returns the destination if invalid properties (i.e. a string or number) cannot be added to it', function () {
      let a = [1, 2, 3, 4, 5];
      let b = 6;
      expect(_.extend(a, b)).to.eql([1,2,3,4,5]);
      
      let s1 = 'hello';
      let s2 = 'world';
      expect(_.extend(s1, s2)).to.equal('hello');

      let n1 = 1234;
      let n2 = 5678;
      expect(_.extend(n1, n2)).to.equal(1234);
    });
  });

  // DEFAULTS
  describe('#_.defaults', function () {
    it('is a function', function () {
      expect(_.defaults).to.be.a('function');
    });
    it('returns the object with undefined properties filled in with the first value present in the default object', function () {
      expect(_.defaults({flavor: 'chocolate'}, {flavor: 'vanilla', sprinkles: 'lots'})
      ).to.eql({flavor: 'chocolate', sprinkles: 'lots'});
    });
    it('returns the object with undefined properties filled in with the first value present in the default array', function () {
      expect(_.defaults({flavor: 'chocolate'}, ['sprinkles', 'sauce'])
      ).to.eql({0: 'sprinkles', 1: 'sauce', flavor: 'chocolate'});
    });
    it('returns the array with unfilled index positions filled in with the first value present in the index position in the default array', function () {
      expect(_.defaults(['apples', 'bananas'], ['cherries', 'dates', 'oranges', 'pears'])
      ).to.eql(['apples', 'bananas', 'oranges', 'pears']);
    });
    it('returns the object with undefined properties filled in with the first value present in the list of defaults objects', function () {
      let iceCream = {flavor: 'chocolate'};
      expect(_.defaults(iceCream, {flavor: 'vanilla', sprinkles: 'lots'}, {sauce: 'raspberry', additions: 'flake'})
      ).to.eql({flavor: 'chocolate', sprinkles: 'lots', sauce: 'raspberry', additions: 'flake'});

      iceCream = {flavor: 'chocolate'};
      expect(_.defaults(iceCream, {flavor: 'vanilla', sprinkles: 'lots'}, {sauce: 'raspberry', additions: 'flake'}, 
      {flavor: 'strawberry', sprinkles: 'few'})
      ).to.eql({flavor: 'chocolate', sprinkles: 'lots', sauce: 'raspberry', additions: 'flake'});
    });
    it('returns the array with unfilled index positions filled in with the first value present in the index position in the list of default arrays', function () {
      expect(_.defaults(['cat', 'dog'], ['bear', 'hippo', 'panda', 'snake'], ['koala', 'elephant', 'monkey', 'tiger', 'lion'])
      ).to.eql(['cat', 'dog', 'panda', 'snake', 'lion']);
    });
    it('returns undefined if no arguments are passed', function () {
      expect(_.defaults()
      ).to.be.undefined;
    });
    it('returns the object when no default objects are passed', function () {
      expect(_.defaults({flavor: 'chocolate'})
      ).to.eql({flavor: 'chocolate'});
    });
    it('returns the object when given an invalid data type', function () {
      expect(_.defaults(1268, 4002)
      ).to.eql(1268);
      expect(_.defaults('Hello', {greeting: 'Good afternoon'})
      ).to.eql('Hello');
    });
  });

  // REDUCE
  describe.only('#_.reduce', function () {
    it('is a function', function () {
      expect(_.reduce).to.be.a('function');
    });
    it('reduces a list of values into a single value', function () {
      expect(_.reduce([1, 2, 3], function (acc, num) { 
        return acc + num; 
      }, 0)).to.equal(6);
      expect(_.reduce(['reducing', 'is', 'simple'], function (acc, str) { 
        return acc + str; 
      }, '')).to.equal('reducingissimple');
      expect(_.reduce({a: 1, b: 2, c: 3}, function (acc, num) { 
        return acc + num; 
      }, 0)).to.equal(6);
    });
    it('flattens (reduces) an array of arrays to a single array', function () {
      expect(_.reduce([[0, 1], [2, 3], [4, 5]], function(acc, elem) {
        acc = acc.concat(elem);
        return acc;
      },[])).to.eql([0, 1, 2, 3, 4, 5]);
      expect(_.reduce([[0, 1], [2, 3], [4, 5]], function(acc, elem) {
        acc = acc.concat(elem);
        return acc;
      },[])).to.have.lengthOf(6);
    });
    it('provides a tally of recurring values in an array', function () {
      let desserts = ['cake', 'cake', 'cake', 'trifle', 'jelly', 'trifle', 'jelly', 'coffee cake'];
      expect(_.reduce(desserts, function (acc, dessert) { 
        if (acc[dessert]) { 
          acc[dessert]++; 
        } else { 
          acc[dessert] = 1; 
          } 
        return acc; 
      }, {})).to.eql({'cake': 3, 'trifle': 2, 'jelly': 2, 'coffee cake': 1});
    });
    it('calls the iteratee the correct number of times when passed an array (checked with a spy)', function () {
      var spy = sinon.spy();
      _.reduce([1, 2, 3], spy, 0);
      expect(spy.callCount).to.equal(3);
    });
    it('uses the first element of the array when no memo is passed', function () {
      expect(_.reduce([1, 2, 3], function (acc, num) { 
        return acc + num; 
      })).to.equal(6);
      expect(_.reduce([[0, 1], [2, 3], [4, 5]], function(acc, elem) {
        acc = acc.concat(elem);
        return acc;
      })).to.eql([0, 1, 2, 3, 4, 5]);
    });
    it('uses the first element of the array when no memo is passed (checked with a spy)', function () {
      const spy = sinon.spy();
      _.reduce([1, 2, 3, 4, 5, 6], spy);
      expect(spy.callCount).to.equal(5);
    });
    it('uses the first value of the object when no memo is passed', function () {
      expect(_.reduce({a: 1, b: 2, c: 3}, function (acc, num) { 
        return acc + num; 
      })).to.equal(6);
    });
  });

});