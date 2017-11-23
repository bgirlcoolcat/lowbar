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

// REJECT
_.reject = function (list, predicate) {

  let rejectList = [];

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
_.each = function (list, iteratee) {
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
_.map = function (list, iteratee) {
  let newArr = [];
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
    fromIndex = fromIndex || 0;
    let startIndex = list.slice(fromIndex); 
      return _.indexOf(startIndex, value ) >= 0;
  }
  if (typeof list === 'object') {
    return Object.values(list).indexOf(value) >= 0;
  } 
  return false;
};

// PLUCK
_.pluck = function (list, propertyName) {
  let res = [];
    for (var i = 0; i < list.length; i++) {
      res[i] = list[i][propertyName];
    }
    return res;
};


module.exports = _;