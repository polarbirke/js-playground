const test = require('tape');
import gaStandardMapping from '../module.js';
import sum from '../module.js';

test('a simple math function test', t => {
    t.equal(sum(1,3), 4, "The sum of 1 + 3 should be 4.");

    t.end();
});

// Anpassen, wenn CKN definiert
const CKNMock = [
  { name: 'uid',        value: '1234567abc' },
  { name: 'rsid',       value: 'recipe1234' },
  { name: 'recipeName', value: 'TestRezept' },
  { name: 'ingedients', value: 'zut1,zut2,zut3' },
  { name: 'resKat',     value: 'rezKat1,rezKat2' },
  { name: 'tags',       value: 'tag1,tag2,tag3' },
];

// Anpassen, wenn GAN definiert
const GANMock = [
  'uid:1234567abc;',
  'rsid:recipe1234;',
  'recipeName:TestRezept;',
  'ingedients:zut1,zut2,zut3;',
  'resKat:rezKat1,rezKat2;',
  'tags:tag1,tag2,tag3;'
];

test('gaStandardMapping', t => {
  t.test('should map CKN to GAN', assert => {

    let gaStandard = gaStandardMapping(CKNMock);

    assert.equal(gaStandard, GANMock, 'mapping CKN to GAN');

    assert.end();
  })
});