const test = require('tape');
import sum from '../module.js';

test('a simple math function test', t => {
    t.equal(4, sum(1,3), "The sum of 1 + 3 should be 4.");

    t.end();
});