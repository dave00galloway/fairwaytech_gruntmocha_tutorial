/**
 * New node file
 */
var expect = require('chai').expect, math = require('../src/math');

describe('add', function() {
	it('should return 3 when passed the params (1,2)', function() {
		expect(math.add(1, 2)).to.equal(3);
	});
});

describe('subtract', function() {
	it('should return -1 when passed the params (1,2)', function() {
		expect(math.subtract(1, 2)).to.equal(-1);
	});
});

describe('multiply', function() {
	it('should return 6 when passed the params (3,2)', function() {
		expect(math.multiply(3, 2)).to.equal(6);
	});
});

//doesn't work when run globally... do we need to npm install chai?
//davids-MacBook-Pro:fairwaytech_tutorial root# mocha tests
//
//module.js:340
//    throw err;
//          ^
//Error: Cannot find module 'chai'

/*
 also fails if installed locally. What's this chai business?
 instructions were missing this line:-
 davids-MacBook-Pro:fairwaytech_tutorial root# npm install chai --save-dev
*/