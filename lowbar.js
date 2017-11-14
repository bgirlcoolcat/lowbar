const _ = {};

// IDENTITY
_.identity = function (value) {
  return value;
};

// FIRST
_.first = function (array) {
    if (!(Array.isArray(array)) && typeof array !== 'string') { 
      return undefined; 
    } else {
      return array[0];
    }
};


module.exports = _;