const test = require('tape');

test('a failing test', function (t) {
    t.equal(42, 99, '"42" should be same as "99"');
    t.end();
});