const test = require('tape');
import product from '../src/module2.js';

test('a simple math function test', function (t) {
    t.equal(product(4,4), 16, "The product of 4 and 4 should be 16.");

    t.end();
});