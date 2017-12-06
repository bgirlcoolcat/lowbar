# Lowbar

This project re-implements many of the core and advanced methods of the Underscore.js library.
Descriptions and examples for how each function works can be found in the [Underscore](http://underscorejs.org/) library.

#### Lowbar I: Core methods

- identity
- values
- first
- last
- indexOf
- filter
- reject
- each
- uniq
- map
- contains
- pluck
- every
- some
- extend
- defaults
- reduce

#### Lowbar II: Advanced methods

These methods implemented are a little trickier. Many of them are utility methods for functions, such as throttle which stops a function being called more often than requested. 

- once
- negate
- shuffle
- invoke
- sortBy
- zip
- sortedIndex
- flatten
- intersection
- difference
- memoize
- delay
- where
- throttle
- partial

The project was completed using test-driven development (TDD) and heavily references the APIs of the following:
- [The Mocha Test Framework](https://mochajs.org/)
- [The Chai Assertion Library](http://chaijs.com/)
- [Sinon - spies, stubs & mocks](http://sinonjs.org/)


## Getting started

### Pre-requisites

You will need **Node.js v7** or above and **npm** installed on your computer. 
To check which version of Node.js you have, open a terminal window and run:

```
node -v
```

Visit https://nodejs.org/en/ for installation instructions or to download the latest version of Node.js. 

To check if you have npm installed, open a terminal window and run:

```
npm -v
```

If not, instructions for installing npm can be found at https://www.npmjs.com/get-npm
**Note:** Node must be installed before installing npm!

### Dependencies
The following development dependencies are used in the test suite, with details about installing them explained below.
- chai 
- mocha
- sinon

## Installation

Clone the project and install the project dependencies, as follows:

Open a terminal window. Navigate to the folder you wish to save the project in, and then run this command:

```
git clone https://github.com/bgirlcoolcat/lowbar.git
```

Navigate into the cloned project folder and run this command:

```
npm install
```

## Running the tests

To run the tests, run this command:

```
npm test
```

## Author

Bev Evans - **[bgirlcoolcat](https://github.com/bgirlcoolcat)**

## Acknowledgments

This project was inspired by [Underscore.js](http://underscorejs.org/) and completed as coursework for [Northcoders](https://northcoders.com/).

