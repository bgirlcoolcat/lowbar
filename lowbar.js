const _ = {};

function binarySearch (arr, searchTerm) {
  let guess,
      min = 0,
      max = arr.length - 1; 
  while (min <= max) {
      guess = Math.floor((min + max) / 2);
      if (arr[guess] === searchTerm) {
        return guess;
      } else if (arr[guess] < searchTerm) {
          min = guess + 1;
        } else {
            max = guess - 1;
          }
  }
  return - 1;
}

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
_.indexOf = function (array, value, isSorted) {
  isSorted = isSorted || false;

  if (array === undefined || !(Array.isArray(array)) && typeof array !== 'string') {
    return - 1;
  }
  if (typeof array === 'string' && isSorted === false) {
    return array.search(value);
  } 
  if (Array.isArray(array) && isSorted === false) {
    return array.findIndex(function(elem) {
      return elem === value;
    });
  }
  if ((Array.isArray(array) || typeof array === 'string') && isSorted === true) {
    return binarySearch(array, value);
  }
  if ((Array.isArray(array) || typeof array === 'string') && typeof isSorted === 'number') {
    let fromIndex = isSorted;
    return array.indexOf(value, fromIndex);
  }
};

// FILTER
_.filter = function (list, predicate, context) {
  let filteredList = [];
  
  if (context) {
    predicate = predicate.bind(context);
  }
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

// REJECT
_.reject = function (list, predicate, context) {

  let rejectList = [];

  if (context) {
    predicate = predicate.bind(context);
  }
  if (!(Array.isArray(list)) && typeof list !== 'string' && typeof list !== 'object') {
    return rejectList;
  }
  if (typeof list === 'object') {
    for (var j = 0 in list) {
      if (predicate(list[j]) === false) {
        rejectList.push(list[j]);
      }
    } 
  } else {
      for (var i = 0; i < list.length; i++) {
        if (predicate(list[i]) === false) {
          rejectList.push(list[i]);
        }
      }
    }
  return rejectList;
};

// EACH
_.each = function (list, iteratee, context) {
  if (context) {
    iteratee = iteratee.bind(context);
  }
  if (!iteratee) {
    return list;
  }
  if (Array.isArray(list) || typeof list === 'string') {
      for (var i = 0; i < list.length; i++) {
        iteratee(list[i], i, list);
      }  
  } else if (typeof list === 'object') {
    for (Object.key in list) {
      iteratee(list[Object.key], Object.key, list);
    }
  } else {
    return list;
  }
};

// UNIQ
_.uniq = function (arr) {
  let newArr = [];

  if (!(Array.isArray(arr)) && typeof arr !== 'string') {
    return newArr;
  }

  for (var i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === - 1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

// MAP
_.map = function (list, iteratee, context) {
  let newArr = [];

  if (context) {
    iteratee = iteratee.bind(context);
  }
  if (typeof list === 'object') {
    for (Object.key in list) {
      newArr.push(iteratee(list[Object.key]));
    }
    return newArr;
  } else {
      for (var i = 0; i < list.length; i++) {
        newArr.push(iteratee(list[i]));
      }  
        return newArr;
    }
};

// CONTAINS
_.contains = function (list, value, fromIndex) {
  if (Array.isArray(list) || typeof list === 'string') {
      return list.indexOf(value, fromIndex) > -1;
  }
  if (typeof list === 'object') {
    return Object.values(list).indexOf(value, fromIndex) > -1;
  } 
  return false;
};

// PLUCK
_.pluck = function (list, propertyName) {
  if (!list) return [];
  let res = [];
    for (var i = 0; i < list.length; i++) {
      res[i] = list[i][propertyName];
    }
    return res;
};

// EVERY
_.every = function(list, predicate) {
  if (Array.isArray(list) || typeof list === 'string') {
    for (var i = 0; i < list.length; i++) {
      if (!predicate(list[i])) return false;
    }
  } else if (typeof list === 'object') {
    for (let key in list) {
      if (!predicate(list[key])) return false;
    }
  }
  return true;
};

// SOME
_.some = function(list, predicate) {
  if (Array.isArray(list) || typeof list === 'string') {
    for (var i = 0; i < list.length; i++) {
      if (predicate(list[i])) return true;
    }
  } else if (typeof list === 'object') {
    for (let key in list) {
      if (predicate(list[key])) return true;
    }
  }
  return false;
};

// EXTEND
_.extend = function(destination, ...sources) {
  if (typeof destination === 'object' || Array.isArray(destination)) {
    return Object.assign(destination, ...sources);
  } else {
    return destination;
  }
};

// DEFAULTS
_.defaults = function(object) {
  for (var i = 1; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      if (object[key] === undefined) {
        object[key] = arguments[i][key];
      }
    }  
  }
  return object;
};

// REDUCE
_.reduce = function (list, iteratee, memo) {
  if (Array.isArray(list)) {
    var noMemo = arguments.length < 3;
    for (var i = 0; i < list.length; i++) {
      noMemo ? (noMemo = false, memo = list[i]) : memo = iteratee(memo, list[i], i, list);
    }
  }
  else if (typeof list === 'object') {
    noMemo = arguments.length < 3;
    for (let key in list) {
      noMemo ? (noMemo = false, memo = list[key]) : memo = iteratee(memo, list[key], i, list);
    }
  }
  return memo;
};


module.exports = _;