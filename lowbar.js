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

//  VALUES
_.values = function (object) {
  if (object !== undefined) {
    return Object.values(object);
  } else {
    return [];
  }
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
  if (array === undefined || !(Array.isArray(array)) && typeof array !== 'string') {
    return - 1;
  }
  if (typeof array === 'string' && !isSorted) {
    return array.search(value);
  } 
  if (Array.isArray(array) && !isSorted) {
    return array.findIndex(function(elem) {
      return elem === value;
    });
  }
  if ((Array.isArray(array) || typeof array === 'string') && isSorted === true) {
    return binarySearch(array, value);
  }
  if ((Array.isArray(array) || typeof array === 'string') && typeof isSorted === 'number') {
    let fromIndex = (typeof isSorted === 'number') ? isSorted : 0;
    return array.indexOf(value, fromIndex);
  }
};

// FILTER
_.filter = function (list, predicate, context) {
  let filteredList = [];
  if (!list && !predicate && !context) { 
    return []; 
  } 
  if (!predicate) {
    return _.identity(list);
  }
  if (context) {
    predicate = predicate.bind(context);
  }
  if (!(Array.isArray(list)) && typeof list !== 'string' && typeof list !== 'object') {
    return [];
  }
  _.each(list, function (elem) {
    if (predicate(elem) === true) {
      filteredList.push(elem);
    }
  }); 
  return filteredList;
};

// REJECT
_.reject = function (list, predicate, context) {
  let rejectList = [];
  if (!list && !predicate && !context) { 
    return []; 
  }
  if (!predicate) {
    return _.identity(list);
  }
  if (context) {
    predicate = predicate.bind(context);
  }
  if (!(Array.isArray(list)) && typeof list !== 'string' && typeof list !== 'object') {
    return rejectList;
  }
  _.each(list, function (elem) {
    if (predicate(elem) === false) {
      rejectList.push(elem);
    }
  }); 
  return rejectList;
};

// EACH
_.each = function (list, iteratee, context) {
  if (context) {
    iteratee = iteratee.bind(context);
  }
  if (!iteratee) {
    return _.identity(list);
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
_.uniq = function (array, isSorted, iteratee) {
  let newArr = [];
  if (!(Array.isArray(array)) && typeof array !== 'string') {
    return newArr;
  }
  _.each(array, function (elem) {
    if (iteratee) {
      if (_.indexOf(newArr, iteratee(elem), isSorted) === - 1) {
        newArr.push(iteratee(elem));
      }
    } else {
        if (_.indexOf(newArr, elem, isSorted) === - 1) {
          newArr.push(elem);
        }
      }
  });
  return newArr;
};

// MAP
_.map = function (list, iteratee, context) {
  let newArr = [];
  if (!iteratee) {
    return _.identity(list);
  }
  if (context) {
    iteratee = iteratee.bind(context);
  }
  _.each(list, function (elem) {
    newArr.push(iteratee(elem));
  });
  return newArr;
};

// CONTAINS
_.contains = function (list, value, fromIndex) {
    if (typeof list === 'object') {
      return _.indexOf(Object.values(list), value, fromIndex) !== -1;
    } else {
        return _.indexOf(list, value, fromIndex) !== -1;
      }
};

// PLUCK
_.pluck = function (list, propertyName) {
  if (!list) return [];
  return _.map(list, function(item) {
    return item[propertyName];
  });
};

// EVERY
_.every = function(list, predicate, context) {
  if (!list && !predicate && !context) { 
    return true; 
  } 
  if (!predicate) {
    return _.identity(list);
  }
  if (context) {
    predicate = predicate.bind(context);
  }
  return _.reduce (list, function (memo, value) {
    if (!memo) {
      return false;
    }
    return (predicate(value)); 
  }, true);
};

// SOME
_.some = function(list, predicate, context) {
  if (!list && !predicate && !context) { 
    return false; 
  } 
  if (!predicate) {
    return _.identity(list);
  }
  if (context) {
    predicate = predicate.bind(context);
  }
  return _.reduce(list, function (memo, value) {
    if (memo) {
      return true;
    } return (predicate(value)); 
  }, false);
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
  let args = Array.prototype.slice.call(arguments);
  _.each(args, function (arg) {
    for (var key in arg) {
      if (object[key] === undefined) {
        object[key] = arg[key];
      }
    }
  });
  return object;
};

// REDUCE
_.reduce = function (list, iteratee, memo, context) {
  if (!iteratee) {
    return _.identity(list);
  }
  if (context) {
    iteratee = iteratee.bind(context);
  }
  var noMemo = arguments.length < 3;
  _.each (list, function (value, i, list) {
    if (noMemo) {
      noMemo = false;
      memo = value;
    } else {
      memo = iteratee (memo, value, i, list);
    }
  }); 
  return memo;
};

// ONCE
_.once = function (func) {
  let runAlready = false;
  
  return function () {
      if (!runAlready) {
        runAlready = true;
        return func.apply(this, arguments);
      }
  };
};

  
module.exports = _;