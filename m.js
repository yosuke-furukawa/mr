var mr = require('miller-rabin').create();
var bn = require('bn.js');

console.log(mr.test(new bn(179425579)));
