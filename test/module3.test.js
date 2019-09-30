const test = require('tape');
import division from '../src/module3.js';

test('a simple math function test', function (t) {
    t.equal(division(8,4), 2, "The division of 8 by 4 should be 2.");

    t.end();
});