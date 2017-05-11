const test = require('tape');
import sum from '../module.js';
import gaStandardMapping from '../module.js';

test('a simple math function test', t => {
    t.equal(4, sum(1,3), "The sum of 1 + 3 should be 4.");

    t.end();
});

const CKNMock = [
  { name: 'uid',        value: '1234567abc'},
  { name: 'rsid',       value: 'recipe1234'},
  { name: 'recipeName', value: 'TestRezept'},
  { name: 'ingedients', value: 'Zut1,Zut2,Zut3'}, // Anpassen, wenn CKN definiert
  { name: 'resKat',     value: 'RezKat1,RezKat2'},
  { name: 'tags',       value: 'Tag1,Tag2,Tag3'},
];

// Anpassen, wenn GAN definiert
const GANMock = 'uid:1234567abc'    +
    'rsid:recipe1234'               +
    'recipeName:TestRezept'         +
    'ingedients:Zut1,Zut2,Zut3'     +
    'resKat:RezKat1,RezKat2'        +
    'tags:Tag1,Tag2,Tag3';

test('gaStandardMapping', t => {
  t.test('should map CKN to GAN', assert => {

    let gaStandard = gaStandardMapping(CKNMock);

    assert.true(gaStandard,GANMock, 'mapping CKN => GAN error');

    assert.end();
  })
});