const math = require('./math');

var doAdd      = (a, b) => math.add(a, b);
var doSubtract = (a, b) => math.subtract(a, b);
var doMultiply = (a, b) => math.multiply(a, b);
var doDivide   = (a, b) => math.divide(a, b);

module.exports = {doAdd, doDivide, doMultiply, doSubtract};