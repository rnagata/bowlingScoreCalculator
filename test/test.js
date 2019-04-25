const mocha = require('mocha');
const chai = require('chai');
const expect = chai.expect;
const scoreCalculator = require('../scoreCalculator.js');

let b = [
  {
    ball_1: 3, //7
    ball_2: 4,
  },
  {
    ball_1: 5, //15
    ball_2: 5,
  },
  {
    ball_1: 10, //30
    ball_2: 10,
    ball_3: 10,
  },
];
describe('#indexOf()', function() {
  it('should return -1 when the value is not present', function() {
    expect(scoreCalculator(b)).to.equal(52);
  });
});
