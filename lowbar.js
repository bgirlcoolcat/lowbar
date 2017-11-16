const _ = {};

// IDENTITY
_.identity = function (value) {
  return value;
};

// FIRST
_.first = function (array, num) {
  if (!(Array.isArray(array)) && typeof array !== 'string') { 
    return undefined; 
  } 
  if (num === undefined) { 
    return array[0]; 
  } 
  if (Array.isArray(array)) { 
    return array.slice(0, num); 
  }
  if (typeof array === 'string') { 
    return array.split('').slice(0, num); 
  }
};

// LAST
_.last = function (array, num) {
  if (!(Array.isArray(array)) && typeof array !== 'string') { 
    return undefined; 
  } 
  if (num === undefined) {
    return array[array.length - 1];
  }
  if (Array.isArray(array)) { 
    return array.slice(- num); 
  }
  if (typeof array === 'string') {
    return array.split('').slice(- num);
  }
};

// INDEX OF
_.indexOf = function (array, value) {
  if (array === undefined || !(Array.isArray(array)) && typeof array !== 'string') {
    return - 1;
  }
  if (typeof array === 'string') {
    return array.search(value);
  } 
  if (Array.isArray(array)) {
    return array.findIndex(function(elem) {
      return elem === value;
    });
  }
};

// FILTER
_.filter = function (list, predicate) {
  let filteredList = [];

  if (!(Array.isArray(list)) && typeof list !== 'string' && typeof list !== 'object') {
    return [];
  }

  if (typeof list === 'object') {
    for (var j = 0 in list) {
      if (predicate(list[j]) === true) {
        filteredList.push(list[j]);
      }
    } 
  } else {
    for (var i = 0; i < list.length; i++) {
      if (predicate(list[i]) === true) {
        filteredList.push(list[i]);
      }
    }
  }
  return filteredList;
};


module.exports = _;

