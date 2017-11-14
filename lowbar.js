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


module.exports = _;