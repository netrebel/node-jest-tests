'use strict'
var add = (a, b) => {
    console.log('Adding numbers!');
    return a + b;
}
var subtract = (a, b) => b - a;
var multiply = (a, b) => a * b;
var divide = (a, b) => b / a;

module.exports = { add, subtract, multiply, divide };
